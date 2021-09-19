import React from 'react';
import { fetchCars } from './redux/actions/CarsAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSortBy } from './redux/actions/FilltersAction';


const names = ['Audi', 'Hyundai', 'Kia', 'Mitsubishi', 'Volkswagen', 'Mercedes-Benz'];

const Sort = React.memo(function Sort({ items }) {
  const { sortBy } = useSelector(({ fillters }) => fillters);

  React.useEffect(() => {
    dispatch(fetchCars(sortBy));
  }, [sortBy]);

  const dispatch = useDispatch();
  const [activeItem, setactiveItem] = React.useState(0);

  const onSelectItem = React.useCallback((index) => {
    dispatch(setSortBy(names[index]));
    setactiveItem(index);
  });

  const itemsSort = names.map((item, index) => {
    return (
      <p id = 'item'>
        <input
          id = 'radio'
          type="radio"
          key={index}
          checked = {activeItem == index ? true : false}
          onClick={() => onSelectItem(index)}
          className={activeItem === index ? 'active' : ''}
          value={item}
        />
        {item}
      </p>
    );
  });

  let elems = Object.values(items);
  let elem = elems.map((item, index) => {
    return (
      <div className='carElem' onClick={() => console.log(item)} key={index}>
        <p id="name">{item.feedData.modelName}</p>
        <p id="vin">{item.vin}</p>
        <img
          src={
            item.photobank.imgs[0].url
              ? item.photobank.imgs[0].url
              : 'https://photobank.carmart.ru/photo/stock-default.jpg'
          }
          alt=""
        />
        <p id="price">{item.legacy.price} ₽</p>
        <p id="txtInCar">Двигатель</p>
        <p>
          /{item.feedData.enginePower}лс / {item.feedData.engineType} /
        </p>
        <p id="txtInCar">КПП</p>
        <p>{item.feedData.transmission}</p>
        <input id='by' type="submit" value='Купить' />
        <p id="txtInCar">Пробег</p>
        <p>{item.feedData.autoProbeg}</p>
      </div>
    );
  });

  let name = names.map((item, index) => {
    return (
      <span onClick={() => onSelectItem(index)} key={index}>
        {item}
      </span>
    );
  });
  return (
    <div>
      <div class="dropdown">
        <button class="mainmenubtn">Марка</button>
        <div class="dropdown-child">{itemsSort}</div>
      </div>
      <div className="elements">{elem}</div>
    </div>
  );
});

export default Sort;
