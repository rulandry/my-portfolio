import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const stylesheet = readFileSync(
  new URL("../app/globals.css", import.meta.url),
  "utf8",
);

function themeVariables(selector) {
  const block = stylesheet.match(new RegExp(`${selector}\\s*\\{([^}]+)\\}`));
  assert.ok(block, `Missing ${selector} theme variables`);
  return Object.fromEntries(
    [...block[1].matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((match) => [
      match[1],
      match[2].trim(),
    ]),
  );
}

function color(value) {
  if (value.startsWith("#")) {
    const hex = value.slice(1);
    const digits = hex.length === 3 ? [...hex].map((digit) => digit + digit) : hex.match(/../g);
    return [...digits.map((digit) => parseInt(digit, 16)), 1];
  }

  const rgba = value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
  assert.ok(rgba, `Unsupported color: ${value}`);
  return rgba.slice(1).map(Number);
}

function over(foreground, background) {
  const [red, green, blue, alpha] = color(foreground);
  const base = color(background);
  return [red, green, blue].map((channel, index) =>
    channel * alpha + base[index] * (1 - alpha),
  );
}

function luminance(channels) {
  const linear = channels.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

function contrast(foreground, background) {
  const foregroundLuminance = luminance(over(foreground, background));
  const backgroundLuminance = luminance(color(background));
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

for (const selector of ["html\\.light", "html\\.dark"]) {
  test(`${selector} keeps page text readable`, () => {
    const variables = themeVariables(selector);
    for (const textColor of ["--foreground", "--muted"]) {
      const ratio = contrast(variables[textColor], variables["--background"]);
      assert.ok(ratio >= 4.5, `${selector} ${textColor} contrast is ${ratio.toFixed(2)}:1`);
    }
  });

  test(`${selector} keeps popup text readable`, () => {
    const variables = themeVariables(selector);
    for (const textColor of [
      "--foreground",
      "--muted",
      "--modal-heading",
      "--modal-eyebrow",
    ]) {
      const ratio = contrast(variables[textColor], variables["--modal"]);
      assert.ok(ratio >= 4.5, `${selector} ${textColor} contrast is ${ratio.toFixed(2)}:1`);
    }
  });
}
