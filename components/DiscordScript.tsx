"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DiscordScript() {
  useEffect(() => {
    const init = async () => {
      try {
        // @ts-ignore
        const sdk = new window.DiscordSDK(
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!
        );
        // @ts-ignore
        await sdk.ready();
        console.log("✅ Discord SDK ready");
      } catch (err) {
        console.error("❌ Discord SDK failed to init", err);
      }
    };

    if (typeof window !== "undefined") {
      init();
    }
  }, []);

  return (
    <Script
      src="https://embed.discord.com/sdk.js"
      strategy="afterInteractive"
    />
  );
}
