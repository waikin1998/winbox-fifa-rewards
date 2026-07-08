import Image from "next/image";

const rewardTiers = [
  { image: "/campaign/reward-1.png", amount: "100", get: "118" },
  { image: "/campaign/reward-2.png", amount: "500", get: "588" },
  { image: "/campaign/reward-3.png", amount: "1,000", get: "1,188" },
  { image: "/campaign/reward-4.png", amount: "3,000", get: "3,558" },
  { image: "/campaign/reward-5.png", amount: "5,000", get: "5,888" },
];

const highlights = [
  ["trophy", "真实奖励", "礼遇清楚透明"],
  ["shield", "公平公正", "规则公开易懂"],
  ["bolt", "快速发放", "达标及时获得"],
  ["headset", "在线支持", "24/7 随时联系"],
];

export default function Home() {
  return (
    <main className="campaign-shell">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="WINBOX 首页">
          <Image
            src="/campaign/winbox-my-logo.png"
            alt="WINBOX MY"
            width={52}
            height={52}
            className="brand-logo"
          />
        </a>
      </header>

      <section id="top" className="hero">
        <Image
          src="/campaign/football-trophy-hero-2026.png"
          alt="原创金色足球奖杯活动主视觉"
          fill
          priority
          sizes="(max-width: 540px) 100vw, 540px"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow">2026 FOOTBALL REWARDS</span>
          <h1>WINBOX <b>×</b> FIFA</h1>
          <p className="hero-kicker">老虎欢迎新奖金</p>
          <p className="hero-offer">参与最高可获得 <strong>MYR 5,888</strong></p>
          <a href="https://t.me/winbox5com" target="_blank" rel="noreferrer" className="primary-cta" data-meta-cta="Hero CTA">
            <span className="primary-cta-copy"><strong>立即参加</strong><small>JOIN NOW</small></span>
          </a>
          <a href="#reward" className="scroll-cue"><span>往下滑查看你的奖励</span><i>⌄</i></a>
        </div>
      </section>

      <section className="highlights" aria-label="活动优势">
        <div className="highlights-grid">
          {highlights.map(([kind, title, text]) => (
            <article key={title}>
              <span className="benefit-icon"><BenefitIcon kind={kind} /></span>
              <strong>{title}</strong>
              <small>{text}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="reward" className="rewards-stack">
        <div className="rewards-heading">
          <span className="section-label">WELCOME REWARDS</span>
          <h2>选择你的迎新奖励 <small>Choose Your Welcome Reward</small></h2>
          <p>五档专属礼遇，每一档都清楚透明<br/><small>Five exclusive reward tiers, clearly presented.</small></p>
        </div>

        {rewardTiers.map((tier, index) => (
          <article className={`tier-card tier-${index + 1}`} key={tier.amount}>
            <Image
              src={tier.image}
              alt={`奖金 ${index + 1}：MYR ${tier.amount} 获得 ${tier.get}`}
              fill
              quality={100}
              sizes="(max-width: 540px) calc(100vw - 28px), 480px"
              className="tier-artwork"
            />
            <a
              href="https://t.me/winbox5com"
              target="_blank"
              rel="noreferrer"
              className="tier-action"
              data-meta-cta={`Reward ${index + 1} CTA`}
              aria-label={`奖金 ${index + 1}，立即通过 Telegram 参加`}
            >
              <strong>立即参加</strong>
              <small>JOIN NOW</small>
            </a>
          </article>
        ))}
      </section>

      <footer>
        <span>WINBOX × FIFA</span>
        <p>© 2026 WINBOX · 请理性参与活动</p>
      </footer>

    </main>
  );
}

function BenefitIcon({ kind }: { kind: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (kind === "trophy") return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...common}>
      <path d="M9 5h14v5.5C23 16 20 20 16 20s-7-4-7-9.5V5Z" />
      <path d="M9 8H5.5v2.5C5.5 14 7.5 16 11 16M23 8h3.5v2.5c0 3.5-2 5.5-5.5 5.5M16 20v5M11 27h10" />
      <path d="m16 8 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3L16 8Z" />
    </svg>
  );
  if (kind === "shield") return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...common}>
      <path d="M16 4 25 8v7c0 6-3.7 10.5-9 13-5.3-2.5-9-7-9-13V8l9-4Z" />
      <path d="m11.5 16 3 3 6.5-7" />
    </svg>
  );
  if (kind === "bolt") return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...common}>
      <path d="M18 3 9.5 17H16l-2 12 9-15h-6l1-11Z" />
      <path d="M5 11h5M3 15h5" />
    </svg>
  );
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...common}>
      <path d="M6 17v-2a10 10 0 0 1 20 0v2" />
      <path d="M6 16H4.5A2.5 2.5 0 0 0 2 18.5v3A2.5 2.5 0 0 0 4.5 24H7v-8h-1ZM26 16h1.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H25v-8h1Z" />
      <path d="M25 24c-1 3-3 4-6 4h-2M15 28h2" />
    </svg>
  );
}
