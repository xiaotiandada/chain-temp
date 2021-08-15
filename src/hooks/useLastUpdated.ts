import { useState } from 'react';

/**
 * 最后一次更新
 * @returns
 */
export function useLastUpdated() {
  const [lastUpdated, setUpdateTime] = useState<Date>(new Date(0));

  const updated = () => setUpdateTime(new Date());
  return { lastUpdated, updated };
}
