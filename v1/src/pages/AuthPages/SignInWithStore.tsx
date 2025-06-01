import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";
import { StoreProvider, useStore } from '../../store/userStore';

export default function SignIn() {
  return (
    <StoreProvider>
      <SignInContent />
    </StoreProvider>
  );
}

function SignInContent() {
  const { state, dispatch } = useStore();
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | e27 - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for e27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
