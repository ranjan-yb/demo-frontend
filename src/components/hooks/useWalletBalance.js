import { useState, useEffect, useCallback } from "react";

const useWalletBalance = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBalance = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await fetch("https://demo-backend-wuwu.onrender.com/api/users/wallet/deposit", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch balance");
      }

      const user = await res.json();
      setBalance(user.deposit || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return { balance, loading, error, refetch: fetchBalance };
};

export default useWalletBalance;
