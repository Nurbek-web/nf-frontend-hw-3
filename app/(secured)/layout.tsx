import SecuredPage from "@/components/SecuredPage";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SecuredPage>
      <>{children} </>
    </SecuredPage>
  );
}
