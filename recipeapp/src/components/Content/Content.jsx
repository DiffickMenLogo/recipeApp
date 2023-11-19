import { ContentText } from '../ContentText/ContentText'
import { Search } from '../Search/Search'
import { Bti } from '../bti/Bti'
import Fmc from '../../assets/FastMovingConsumerGoods.svg'
import Cfr from '../../assets/ChineseFriedRice.svg'
import tu from '../../assets/ThumbsUp.svg'

import tarel from '../../assets/Tarel.png'
import sko from '../../assets/Sko.png'

export const Content = () => {
  const btiArr = [
    { image: Fmc, text: 'Распознавание ингредиентов из чека' },
    { image: Cfr, text: 'Рецепты любой кухни' },
    { image: tu, text: 'Высокий рейтинг рецептов' },
  ]
  return (
    <div className='content'>
      <ContentText />
      <Search />
      <div
        style={{
          display: 'flex',
          gap: '20px',
          width: '70%',
          height: '35vh',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '5%',
          marginTop: '50px',
        }}
      >
        {btiArr.map((item, index) => {
          console.log(item)
          return <Bti key={index} image={item.image} text={item.text} />
        })}
      </div>
      <div className='leftbottomimage'>
        <div style={{ backgroundImage: `url(${tarel})` }} />
      </div>
      <div className='image'>
        <div style={{ backgroundImage: `url(${sko})` }}></div>
      </div>
    </div>
  )
}
