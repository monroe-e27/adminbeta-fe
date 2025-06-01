import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";
import { useUserStore } from "../../store/userStore";
import { useUserHook } from "../../hooks/useUser";


export default function SignIn() {
  
  const { email, password, error, handleEmail, handlePassword, handleError } = useUserHook(null);
  const { doLogin } = useUserStore();
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | e27 - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for e27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm
          email={email}
          password={password}
          error={error}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleError={handleError}
          doLogin={doLogin}
        />
        
      </AuthLayout>
    </>
  );
}
