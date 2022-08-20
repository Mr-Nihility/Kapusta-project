import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Route } from 'react-router';
//--------------------------------------------------//
export default function MobileView() {
  return (
    <>
      <Route path={'balance'} element={<PrivateRoute>"main"</PrivateRoute>} />
      <Route
        path={'create-transaction'}
        element={<PrivateRoute>"form"</PrivateRoute>}
      />
    </>
  );
}
