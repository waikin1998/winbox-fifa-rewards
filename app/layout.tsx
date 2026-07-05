import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "WINBOX x FIFA 活动奖励",
  description: "参与足球主题活动，解锁专属礼遇与丰厚奖励。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1680433613248993');
fbq('track','PageView');

document.addEventListener('click',function(event){
  var target=event.target;
  if(!(target instanceof Element))return;
  var cta=target.closest('[data-meta-cta]');
  if(!cta)return;
  fbq('track','CompleteRegistration',{
    content_name:cta.getAttribute('data-meta-cta')||'CTA',
    status:'cta_clicked'
  });
});`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1680433613248993&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
