import React from 'react';
import Skeleton from 'react-loading-skeleton';

type SkeletonLoadingCardProps = {
  key: number
}

function SkeletonLoadingCard ({key}: SkeletonLoadingCardProps) {
  return (
    <div
    key={key}
    className="border-green-500 border-2 p-2 mb-2 rounded"
  >
    <Skeleton className="mb-2" height={25} baseColor="#171717" highlightColor="#636363"/>
    <Skeleton height={25} count={3} baseColor="#171717" highlightColor="#636363"/>
  </div>
  );
}

export default SkeletonLoadingCard;