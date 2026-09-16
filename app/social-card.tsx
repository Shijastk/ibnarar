import { ImageResponse } from "next/og";

const fallbackSiteUrl = "https://ibnarar.com";

export const socialImageAlt =
  "EBN ARAR Trading, Contracting and Transportation in Qatar";

export function createSocialCard() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackSiteUrl;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#082f57",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${siteUrl}/images/hero/company-overview.webp`}
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(4,31,58,0.98) 0%, rgba(4,31,58,0.91) 46%, rgba(4,31,58,0.48) 72%, rgba(4,31,58,0.20) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "104px",
                height: "104px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.96)",
                padding: "10px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${siteUrl}/logo.png`}
                alt=""
                width="84"
                height="84"
                style={{ width: "84px", height: "84px", objectFit: "contain" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: "31px",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                }}
              >
                EBN ARAR
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  opacity: 0.86,
                }}
              >
                TRADING · CONTRACTING · TRANSPORTATION
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: "760px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "64px",
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              Built on reliability. Serving Qatar since 2003.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "25px",
                lineHeight: 1.35,
                fontWeight: 500,
                opacity: 0.9,
              }}
            >
              Trading & Services · Engineering & Contracting · Heavy Equipment & Transportation
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            <span>ibnarar.com</span>
            <span style={{ opacity: 0.82 }}>State of Qatar</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
