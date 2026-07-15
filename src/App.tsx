import { useState } from "react";
import { Toast } from "./components/Toast";
import type { ToastType } from "./components/Toast";
import { Icon, iconNames } from "./icons";
import { logos } from "./logo";
import "./App.css";

const LOGO_ITEMS: { name: keyof typeof logos; label: string }[] = [
  { name: "symbol", label: "Symbol" },
  { name: "lockupHorizontal", label: "Default lockup — horizontal" },
  { name: "lockupVertical", label: "Default lockup — vertical" },
  { name: "subbrandLockupHorizontal", label: "Subbrand lockup — horizontal" },
  { name: "subbrandLockupVertical", label: "Subbrand lockup — vertical" },
  { name: "byotLockupHorizontal", label: "BYOT lockup — horizontal" },
  { name: "byotLockupVertical", label: "BYOT lockup — vertical" },
];

const TOAST_TYPES: ToastType[] = ["neutral", "info", "error", "warning", "success"];

const RAMPS = [
  "amber", "blue", "cyan", "emerald", "fuchsia", "gray", "green", "indigo",
  "lime", "neutral", "orange", "pink", "purple", "red", "rose", "sky",
  "slate", "stone", "teal", "violet", "yellow", "zinc",
];
const RAMP_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const SEMANTIC_GROUPS: { title: string; tokens: string[] }[] = [
  {
    title: "Surfaces",
    tokens: ["background", "canvas", "card", "container", "container-subtle", "container-elevated", "popover", "item"],
  },
  {
    title: "Text",
    tokens: ["foreground", "muted-foreground", "placeholder", "card-foreground", "popover-foreground", "item-foreground"],
  },
  {
    title: "Brand & actions",
    tokens: [
      "brand", "brand-hover", "brand-active",
      "primary", "primary-hover", "primary-active", "primary-foreground",
      "secondary", "secondary-hover", "secondary-active",
      "accent", "accent-hover", "accent-active",
    ],
  },
  {
    title: "Feedback",
    tokens: ["success", "destructive", "disabled"],
  },
  {
    title: "Supportive palette",
    tokens: [
      "supportive-blue", "supportive-green", "supportive-grey", "supportive-orange",
      "supportive-pink", "supportive-purple", "supportive-red", "supportive-teal", "supportive-yellow",
    ],
  },
  {
    title: "Borders, rings & inputs",
    tokens: ["border", "border-error", "border-focus", "border-success", "ring", "input", "input-alt", "input-track"],
  },
];

const TYPE_SCALE = ["h1", "h2", "h3", "h4", "h5", "h6", "body", "label", "sm-body", "caption"];

const SPACE_SCALE = Array.from({ length: 10 }, (_, i) => `--oc-space-${i}`);
const RADIUS_SCALE = [
  "--oc-control-radius-sm", "--oc-control-radius-md", "--oc-control-radius-lg", "--oc-control-radius-xl",
  "--oc-containers-radius-level-1", "--oc-containers-radius-level-2", "--oc-containers-radius-level-3", "--oc-containers-radius-level-full",
];
const CONTROL_SIZES = ["xs", "sm", "md", "lg", "xl"].map((s) => `--oc-control-size-${s}`);
const DURATIONS = ["micro", "settle", "enter", "expand", "token-reveal", "morph-in", "morph-out"].map((d) => `--oc-duration-${d}`);

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  };

  return (
    <div className="oc-page">
      <div className="oc-page__header">
        <h1 className="oc-page__title">OneCore Design System</h1>
        <button className="oc-theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
      <p className="oc-page__subtitle">
        Design tokens and components pulled from the OneCore_-Refactor Figma file. Tokens are read live from{" "}
        <code>src/tokens/tokens.css</code> custom properties.
      </p>

      <section className="oc-section">
        <h2 className="oc-section__title">Components</h2>
        <div className="oc-card">
          <div className="oc-ramp-name">Toast</div>
          <div className="oc-row" style={{ alignItems: "flex-start" }}>
            {TOAST_TYPES.map((t) => (
              <Toast key={t} type={t} showTimeoutBar={t !== "neutral"} />
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Icons</h2>
        <div className="oc-card">
          <p style={{ marginTop: 0, color: "var(--oc-muted-foreground)", fontSize: 14 }}>
            Curated starter set (~30) from the Figma Icons page (~350 total). Real vector paths, not
            approximations — see <code>src/icons/Icon.tsx</code> for how to pull more.
          </p>
          <div className="oc-grid">
            {iconNames.map((name) => (
              <div className="oc-swatch" key={name} style={{ alignItems: "center" }}>
                <Icon name={name} size={24} />
                <span className="oc-swatch__label">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Logos</h2>
        <div className="oc-card">
          <p style={{ marginTop: 0, color: "var(--oc-muted-foreground)", fontSize: 14 }}>
            Reversed lockups pulled from the OneCore Figma file (node 30117:24579) — light fill,
            shown on a dark chip here since they're built for dark or brand-colored surfaces. See{" "}
            <code>src/logo/index.ts</code>.
          </p>
          <div className="oc-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
            {LOGO_ITEMS.map(({ name, label }) => (
              <div className="oc-swatch" key={name}>
                <div className="oc-logo-chip">
                  <img src={logos[name]} alt={label} />
                </div>
                <span className="oc-swatch__name">{label}</span>
                <span className="oc-swatch__label">{name}.svg</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Semantic tokens</h2>
        <div className="oc-card" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {SEMANTIC_GROUPS.map((group) => (
            <div key={group.title}>
              <div className="oc-ramp-name">{group.title}</div>
              <div className="oc-grid">
                {group.tokens.map((t) => (
                  <div className="oc-swatch" key={t}>
                    <div className="oc-swatch__color" style={{ background: `var(--oc-${t})` }} />
                    <span className="oc-swatch__name">{t}</span>
                    <span className="oc-swatch__label">--oc-{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Typography</h2>
        <div className="oc-card">
          {TYPE_SCALE.map((t) => (
            <div className="oc-type-row" key={t}>
              <span className="oc-type-row__meta">
                {t}
                <br />
                var(--oc-type-{t}-size) / var(--oc-type-{t}-line)
              </span>
              <span
                style={{
                  fontFamily: "var(--oc-font-family)",
                  fontSize: `var(--oc-type-${t}-size)`,
                  lineHeight: `var(--oc-type-${t}-line)`,
                  fontWeight: `var(--oc-type-${t}-weight)` as any,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Primitive color ramps</h2>
        <div className="oc-card">
          {RAMPS.map((ramp) => (
            <div key={ramp} style={{ marginBottom: 16 }}>
              <div className="oc-ramp-name">{ramp}</div>
              <div className="oc-ramp-grid">
                {RAMP_STEPS.map((step) => (
                  <div
                    key={step}
                    className="oc-swatch__ramp-color"
                    title={`--oc-${ramp}-${step}`}
                    style={{ background: `var(--oc-${ramp}-${step})` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Spacing</h2>
        <div className="oc-card">
          {SPACE_SCALE.map((v) => (
            <div className="oc-space-row" key={v}>
              <span className="oc-space-row__label">{v}</span>
              <div className="oc-space-row__box" style={{ width: `var(${v})`, height: 16 }} />
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Radius</h2>
        <div className="oc-card oc-row">
          {RADIUS_SCALE.map((v) => (
            <div className="oc-swatch" key={v}>
              <div
                className="oc-swatch__color"
                style={{ background: "var(--oc-brand)", borderRadius: `var(${v})`, width: 64 }}
              />
              <span className="oc-swatch__label">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Control sizes</h2>
        <div className="oc-card oc-row" style={{ alignItems: "flex-end" }}>
          {CONTROL_SIZES.map((v) => (
            <div className="oc-swatch" key={v}>
              <div
                style={{
                  background: "var(--oc-primary)",
                  width: `var(${v})`,
                  height: `var(${v})`,
                  borderRadius: "var(--oc-control-radius-sm)",
                }}
              />
              <span className="oc-swatch__label">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="oc-section">
        <h2 className="oc-section__title">Motion durations</h2>
        <div className="oc-card oc-row">
          {DURATIONS.map((v) => (
            <span key={v} className="oc-swatch__label" style={{ fontSize: 13 }}>
              {v}: <strong>var({v})</strong>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
