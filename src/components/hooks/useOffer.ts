import { useState, useEffect } from 'react';
import { Card } from '../types/card';
import { allCards } from '../mocks/offers';

function useOffer(id: string): Card | null {
  const [offer, setOffer] = useState<Card | null>(null);

  useEffect(() => {
    if (id) {
      const foundOffer = allCards.find((card) => card.id === id);
      setOffer(foundOffer || null);
    }
  }, [id]);

  return offer;
}

export default useOffer;
