import "./Skeletons.css";

export const StatSkeleton = () => (
  <div className="skeleton stat-skeleton" />
);

export const SectionSkeleton = () => (
  <div className="skeleton section-skeleton" />
);

export const ListSkeleton = () => (
  <div>
    {[1, 2, 3].map(i => (
      <div key={i} className="skeleton list-skeleton" />
    ))}
  </div>
);
