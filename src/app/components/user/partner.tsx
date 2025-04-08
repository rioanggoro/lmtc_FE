import { partners } from "../../../lib/partners";

export default function PartnerSection() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-secondary-color">
          Exclusive Partners
        </h2>
        <a
          href="/partners"
          className="text-sm text-secondary-color hover:underline"
        >
          View All &rarr;
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex overflow-hidden rounded-xl bg-white shadow-lg shadow-black/5"
          >
            <div className="flex w-1/2 items-center justify-center bg-white p-6">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="flex w-2/3 flex-col justify-between p-6">
              <div>
                {partner.isPopular && (
                  <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    ⭐ Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-800">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </div>
              <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
                Get Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
