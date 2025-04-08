import { partners } from "~/lib/partnerts/";

export default function PartnerSection() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 p-2 text-lg font-semibold text-gray-800">
        Exclusive Partners
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg shadow-black/30"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="mb-4 h-16 w-16 object-contain"
            />
            <div className="text-center">
              <p className="font-semibold text-gray-800">{partner.name}</p>
              <p className="text-gray-600">{partner.category}</p>
            </div>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
              Get Code
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
