import PropertyDetail from '../_components/forms/PropertyDetail';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-bold">Property details</div>
      <div className="text-1xl font-bold">Property detail</div>
      <PropertyDetail />
    </div>
  );
}
