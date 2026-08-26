import { Navigate, Route } from"react-router-dom";
import { useAuth } from"../context/AuthContent";

function ProtectedRoute({ children }){
    const { use } = useAuth();
    return use ? children : <Navigate to="/login"/>;
}

<Route 
 path="/keranjang"
element={
    <ProtectedRoute>
        <keranjang/>
    </ProtectedRoute>
}

/>
export default ProtectedRoute;