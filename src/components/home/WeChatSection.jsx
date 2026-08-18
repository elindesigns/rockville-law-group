import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import TrustBar from '../shared/TrustBar.jsx'
import { WeChatIcon, CloseIcon } from '../shared/Icons.jsx'
import wechatQr from '../../assets/li-weng-wechat-qr.png'
import './WeChatSection.css'

/**
 * Structural layout (dark two-column section, badge on the QR card,
 * scan caption, tap-to-enlarge) is adapted from a reference mockup
 * the user supplied for a different firm — not copied verbatim. The
 * reference's info grid (WeChat ID, hours, response time) isn't used
 * here because those specific facts were never verified for Li Weng;
 * TrustBar's already-verified admissions/languages/experience stand
 * in for it instead. Same white-backed frame as WeChatCard, for the
 * same reason: the source image's white regions are transparent, so
 * it needs a guaranteed-opaque light backing to stay scannable.
 */
export default function WeChatSection() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const [enlarged, setEnlarged] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!enlarged) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setEnlarged(false)
    }
    // Move focus into the dialog on open, and back to whatever opened
    // it on close, so keyboard users never lose their place.
    closeRef.current?.focus()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [enlarged])

  const alt = isZh ? 'Li Weng 律师微信二维码，扫码添加' : "QR code to add Li Weng's WeChat"

  return (
    <section className="section section--ink wechat-section">
      <div className="container wechat-section__grid">
        <Reveal className="wechat-section__text">
          <SectionHeading
            eyebrow={isZh ? '联系方式 · 微信' : 'Connect · WeChat'}
            title={isZh ? <><em>微信</em>联系 Li Weng 律师</> : <>Reach Li Weng on <em>WeChat</em></>}
            lede={
              isZh
                ? '许多客户更习惯使用微信用中文沟通。扫描右侧二维码，即可直接添加 Li Weng 律师。'
                : 'Many clients prefer to communicate in Chinese on WeChat. Scan the code to connect directly with Li Weng.'
            }
            zh={isZh ? undefined : '扫码添加 Li Weng 律师微信，中文沟通更方便。'}
            onInk
          />
          <div className="wechat-section__divider" />
          <TrustBar />
        </Reveal>

        <Reveal delay={0.1} className="wechat-section__qr-col">
          <button
            type="button"
            ref={triggerRef}
            className="wechat-section__qr-frame"
            onClick={() => setEnlarged(true)}
            aria-label={isZh ? '放大二维码' : 'Enlarge QR code'}
          >
            <img src={wechatQr} alt={alt} width={408} height={380} />
            <span className="wechat-section__badge" aria-hidden="true">
              <WeChatIcon />
            </span>
          </button>
          <p className="wechat-section__caption">
            {isZh ? '扫码添加 · 点击放大' : 'Scan to connect · tap to enlarge'}
          </p>
          <p className="wechat-section__hint">
            {isZh ? '打开微信，使用「扫一扫」' : 'Open WeChat and use "Scan"'}
          </p>
        </Reveal>
      </div>

      {enlarged && (
        <div
          className="wechat-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={isZh ? '微信二维码' : 'WeChat QR code'}
          onClick={() => setEnlarged(false)}
        >
          <div className="wechat-lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <img src={wechatQr} alt={alt} width={408} height={380} />
            <button
              type="button"
              ref={closeRef}
              className="wechat-lightbox__close"
              onClick={() => setEnlarged(false)}
              aria-label={isZh ? '关闭' : 'Close'}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
