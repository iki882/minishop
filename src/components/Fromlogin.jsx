import FormLogin from "../components/FormLogin";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login MiniShop
        </h1>

        <FormLogin />
      </div>
    </div>
  );
}

export default Login;