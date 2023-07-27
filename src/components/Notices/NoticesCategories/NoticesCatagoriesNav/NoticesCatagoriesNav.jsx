import { useAuth } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CatContainer, Input, Label } from './NoticesCatagoriesNav.styled';

const NoticesCatagoriesNav = ({ setCategory, setPage, setRerender }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = e => {
    const category = e.currentTarget.value;
    setCategory(category);
    setPage(1);
    setRerender(true);
    navigate(`/notices/${category}`);
  };

  return (
    <CatContainer>
      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio1"
        name="radios"
        value="sell"
        defaultChecked
      ></Input>
      <Label htmlFor="radio1">{t('sell')}</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio2"
        name="radios"
        value="lost-found"
      ></Input>
      <Label htmlFor="radio2">{t('lost_found')}</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio3"
        name="radios"
        value="for-free"
      ></Input>
      <Label htmlFor="radio3">{t('in_good_hands')}</Label>

      {isLoggedIn && (
        <>
          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio4"
            name="radios"
            value="favorite"
          ></Input>
          <Label htmlFor="radio4">{t('favorite_ads')}</Label>

          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio5"
            name="radios"
            value="my-ads"
          ></Input>
          <Label htmlFor="radio5">{t('my_ads')}</Label>
        </>
      )}
    </CatContainer>
  );
};

export default NoticesCatagoriesNav;
