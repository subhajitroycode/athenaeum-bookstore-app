import CartItems from "./_components/CartItems";
import SummaryCard from "./_components/SummaryCard";

function page() {
  return (
    <section className="max-w-350 mx-auto pt-8 px-12 pb-20 grid grid-cols-[1fr_420px] gap-12 animate-fade-in-scale">
      <div className="flex flex-col gap-8">
        <div className="bg-card border border-(--border-color) p-8">
          <h2 className="font-playfair text-3xl font-bold text-(--text-primary) mb-6 capitalize">
            shopping cart
          </h2>
          <CartItems />
        </div>
      </div>

      <aside className="sticky top-25 h-fit">
        <SummaryCard />
      </aside>
    </section>
  );
}

export default page;
