
import useAuthCheck from "../../hooks/useAuthCheck";

function MainContainer({ component, isProtected }: { component: React.ReactNode, isProtected: boolean }) {
  useAuthCheck(isProtected);
  //useRoleAccessCheck(role);

  return (
    <>
     {component}
    </>
  );
}
export default MainContainer;
