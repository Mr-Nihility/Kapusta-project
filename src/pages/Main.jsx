import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
export const Main = () => {
  const emailToShow = useSelector(getUserEmail);
  console.log(emailToShow);
  return (
    <div>
      <h2>Hello {emailToShow}! </h2>
    </div>
  );
};
