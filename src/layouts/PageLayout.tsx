import { Link } from "react-router";
import { BtnCreateNew } from "../components/Form";

function PageLayout({
  pageTitle,
  btn,
  children,
}: {
  pageTitle: string;
  btn?: { text: string; navigate: string } | null;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
        {btn ? (
          <Link to={btn.navigate} className="text-xs">
            <BtnCreateNew text={btn.text} />
          </Link>
        ) : null}
      </header>
      <main className="mt-4 mb-8">{children}</main>
    </>
  );
}

export default PageLayout;
