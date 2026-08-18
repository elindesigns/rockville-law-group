import { useLocation } from 'react-router-dom'
import { WeChatIcon } from './shared/Icons.jsx'
import wechatQr from '../assets/li-weng-wechat-qr.png'
import './WeChatCard.css'

/**
 * WeChat is one of the primary ways Rockville Law Group's
 * Chinese-speaking clients prefer to reach the firm. The QR image has
 * its transparent background composited over an explicit white panel
 * here — the source PNG has its white regions stripped to
 * transparency, so it needs a guaranteed-opaque light backing to stay
 * scannable regardless of what section it's placed in.
 */
export default function WeChatCard({ className = '' }) {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  return (
    <div className={`wechat-card ${className}`.trim()}>
      <div className="wechat-card__qr-frame">
        <img
          src={wechatQr}
          alt={isZh ? 'Li Weng 律师微信二维码，扫码添加' : "QR code to add Li Weng's WeChat"}
          className="wechat-card__qr"
          width={408}
          height={380}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="wechat-card__info">
        <h3 className="wechat-card__title">
          <WeChatIcon className="wechat-card__icon" />
          {isZh ? '微信联系' : 'Connect on WeChat'}
        </h3>
        <p className="wechat-card__desc">
          {isZh
            ? '使用微信「扫一扫」，直接添加 Li Weng 律师，方便沟通。'
            : 'Scan with the WeChat app to connect with Li Weng directly.'}
        </p>
      </div>
    </div>
  )
}
