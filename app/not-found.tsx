import HeaderBanner from "@/components/headerBanner/HeaderBanner";

export default function NotFound() {
  return (
    <div>
      <HeaderBanner bgImg="web.jpg" title="Page Not Found" />
      <div className="text-center min-h-[60vh] bg-gray-400 flex flex-cols items-center justify-center">
        <div>
          <h1 className="text-3xl">Oops! 404</h1>
          <p className="text-xl py-3">Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
