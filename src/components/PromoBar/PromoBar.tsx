import './PromoBar.scss'

export const PromoBar: React.FC = () => {
    return (
        <div className="promo-bar">
            <p className='promo-bar__paragraph'>PROMOCJE</p>
            <button className='promo-bar__button'>
                X
            </button>
        </div>
    )
}