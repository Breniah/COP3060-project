import React from "react";

function SettingsPage() {
    return (
        <div className="settings-container">
            <h1>Settings</h1>

            <section>
                <h2>Accessibility Tools</h2>
                <ContrastChecker />
                <AltTextChecker />
            </section>
        </div>
    );
}

/* ---------------- Color Contrast Checker ---------------- */

function calculateContrast(hex1, hex2) {
    const luminance = (hex) => {
        const c = hex.substring(1);
        const rgb = [
            parseInt(c.substr(0, 2), 16),
            parseInt(c.substr(2, 2), 16),
            parseInt(c.substr(4, 2), 16)
        ].map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });

        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    };

    const L1 = luminance(hex1);
    const L2 = luminance(hex2);
    return ((Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)).toFixed(2);
}

function ContrastChecker() {
    const [fg, setFg] = React.useState("#000000");
    const [bg, setBg] = React.useState("#ffffff");

    const ratio = calculateContrast(fg, bg);
    const passes = ratio >= 4.5 ? "Passes WCAG AA" : "Fails WCAG AA";

    return (
        <div className="audit-section">
            <h3>Color Contrast Checker</h3>
            <div>
                <label>Text Color:</label>
                <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} />
            </div>
            <div>
                <label>Background Color:</label>
                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
            </div>
            <p>Contrast Ratio: {ratio} — <strong>{passes}</strong></p>
        </div>
    );
}

/* ---------------- Alt Text Checker ---------------- */

function AltTextChecker() {
    const images = document.querySelectorAll("img");
    const missing = [...images].filter(img => !img.alt || img.alt.trim() === "");

    return (
        <div className="audit-section">
            <h3>Missing Alt Text</h3>

            {missing.length === 0 ? (
                <p>✔ All images have alt text</p>
            ) : (
                <ul>
                    {missing.map((img, i) => (
                        <li key={i}>⚠ Missing alt text for: {img.src}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SettingsPage;

