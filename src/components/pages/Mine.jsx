import React, { useState, useEffect } from "react";
import useWalletBalance from "../hooks/useWalletBalance";

const TILE_COUNT = 25;

const Mine = () => {
  const token = localStorage.getItem("token");

  const { balance, loading, error, refetch } = useWalletBalance();

  const [mines, setMines] = useState(3);
  const [betAmount, setBetAmount] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);

  const [bombs, setBombs] = useState([]);
  const [clickedTiles, setClickedTiles] = useState([]);
  const [multiplier, setMultiplier] = useState(1);
  const [loss, setLoss] = useState(false);

  const [newGameState, setNewGameState] = useState(false);

  const [lostTile, setLostTile] = useState(null);
  const [bombTiles, setBombTiles] = useState([]);

  const [diamondTiles, setDiamondTiles] = useState([]);

  // const isDiamond = isClicked || diamondTiles.includes(index);


  const handleCashout = async (profit) => {
    // if (!gameStarted || loss || clickedTiles.length === 0) return;

    try {
      const res = await fetch("http://localhost:1000/api/mine/cashout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ YOU NEED THIS
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ profit }),
      });

      const data = await res.json();
      console.log("Cashout response from backend = ", data);

      refetch();
    } catch (error) {
      console.error("Cashout error:", error);
    }

    // TODO: Add balance to user in backend
    setGameStarted(false);
    setClickedTiles([]);
    setBombs([]);
    setMultiplier(1);
    setLoss(false);
  };

  // NEW GAME FUNCTION
  const newGame = () => {
              setLostTile(null);
          setBombTiles([]);
          setClickedTiles([]); // clear safe selections
          setDiamondTiles([])
          setGameStarted(true); // auto-start new game (optional)
          setGameStarted(false); // ✅ reset to "▶ Start Game" button
  };

  const getMultiplier = (clickedCount, mineCount) => {
    // Base multiplier
    const base = 1 + mineCount * 0.05;

    // Optional: increase multiplier based on number of safe tiles clicked
    // For simplicity, you can multiply once per click:
    return (base ** clickedCount).toFixed(2); // exponential growth
  };

  // Send Mines to backend
  const sendMineToBackend = async () => {
    try {
      const nextMultiplier = (1 + mines * 0.05).toFixed(2);

      const res = await fetch("http://localhost:1000/api/mine/bet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mines, nextMultiplier, betAmount }),
      });

      const data = await res.json();
      console.log("data from backend =", data);
      // setBombs(data.bombs); // ✅ use server-generated bomb array
      // setGameStarted(true);

      // Wallet Deduct
      if (data.success) {
        refetch(); // Now it will reflect the updated balance
      }
    } catch (error) {
      console.error("Failed to start mine game:", error);
    }
  };

  

  const handleClick = (index) => {
    if (!clickedTiles.includes(index)) {
      setClickedTiles([...clickedTiles, index]); // mark tile as clicked
    }
  };

  // SEND EACH BOX
// const sendEachBoxButtonValue = async (btnValue) => {
//   try {
//     const res = await fetch("http://localhost:1000/api/mine/click", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ btnValue }),
//     });
//     const data = await res.json();

//     if (data.isWin === false) {
//       setLostTile(btnValue);

//       // generate bombs
//       const remainingBombs = [];
//       const bombCount = data.bomb;
//       while (remainingBombs.length < bombCount) {
//         const randomIndex = Math.floor(Math.random() * TILE_COUNT);
//         if (
//           randomIndex !== btnValue &&
//           !remainingBombs.includes(randomIndex) &&
//           !clickedTiles.includes(randomIndex)
//         ) {
//           remainingBombs.push(randomIndex);
//         }
//       }
//       setBombTiles(remainingBombs);

//       setTimeout(() => {
//         newGame();
//       }, 3000);
//     } else {
//       // ✅ Only add to clickedTiles when it's a safe click
//       setClickedTiles((prev) => [...prev, btnValue]);
//     }
//   } catch (error) {
//     console.error("Failed to send box click:", error);
//   }
// };

  const sendEachBoxButtonValue = async (btnValue) => {
  try {
    const res = await fetch("http://localhost:1000/api/mine/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ btnValue }),
    });
    const data = await res.json();
    console.log("getting result =", data);
    

    if (data.isWin === false) {
      setLostTile(btnValue);

      // generate bombs
      const remainingBombs = [];
      const bombCount = data.bomb;
      while (remainingBombs.length < bombCount) {
        const randomIndex = Math.floor(Math.random() * TILE_COUNT);
        if (
          randomIndex !== btnValue &&
          !remainingBombs.includes(randomIndex) &&
          !clickedTiles.includes(randomIndex)
        ) {
          remainingBombs.push(randomIndex);
        }
      }
      setBombTiles(remainingBombs);

      // ✅ generate diamonds for remaining safe tiles
      const diamonds = [];
      for (let i = 0; i < TILE_COUNT; i++) {
        if (
          i !== btnValue && // not the bomb clicked
          !remainingBombs.includes(i) // not a bomb
        ) {
          diamonds.push(i);
        }
      }
      setDiamondTiles(diamonds);

      setTimeout(() => {
        newGame();
      }, 3000);
    } else {
      // ✅ Only add to clickedTiles when it's a safe click
      setClickedTiles((prev) => [...prev, btnValue]);
    }
  } catch (error) {
    console.error("Failed to send box click:", error);
  }
};


  // CASHOUT BUTTON
  const Cashout = () => {
    fetch("http://localhost:1000/api/mine/clearbet", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // DELETE USER GAME ROUND
  // setTimeout(() => {
  //   fetch("http://localhost:1000/api/mine/clearbet", {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }, 46000); // Call after 46s

  return (
    <div className="w-full h-full mt-20 mb-20 px-2">
      <div className="max-w-sm sm:max-w-md mx-auto bg-gradient-to-b from-[#1e1e2f] to-[#151525] text-white rounded-2xl p-4 md:p-6 space-y-5 shadow-2xl mt-2 mb-10">
        {/* Controls */}
        <div className="flex justify-between items-center">
          <select
            value={mines}
            onChange={(e) => setMines(Number(e.target.value))}
            disabled={gameStarted}
            className="bg-[#216f4b] px-3 py-2 rounded text-sm"
          >
            {[...Array(15)].map((_, i) => (
              <option key={i} value={i + 1}>
                Mines: {i + 1}
              </option>
            ))}
          </select>
          <div className="text-sm bg-yellow-400 text-black px-2 py-1 rounded font-semibold shadow-sm">
            Next: {(1 + mines * 0.05).toFixed(2)}x
          </div>
        </div>

{/* Grid */}
<div className="grid grid-cols-5 gap-2">
  {Array.from({ length: TILE_COUNT }, (_, index) => {
    const isClicked = clickedTiles.includes(index);
    const isBomb = lostTile === index || bombTiles.includes(index);
    const isDiamond = isClicked || diamondTiles.includes(index); // <- include unclicked safe tiles

    return (
      <button
        key={index}
        onClick={() => sendEachBoxButtonValue(index)}
        disabled={!gameStarted || isClicked || lostTile !== null}
        className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-xl border
          ${isBomb
            ? "bg-red-500 border-red-700" // 💣 bombs
            : isDiamond
            ? "bg-yellow-400 border-yellow-600" // 💎 diamonds
            : "bg-gray-700 border-gray-500" // default
          }`}
      >
        {/* 👉 Show icons */}
        {isBomb ? "💣" : isDiamond ? "💎" : ""}
      </button>
    );
  })}
</div>


        <div className="text-center text-green-400 font-semibold text-lg">
          Multiplier: {getMultiplier(clickedTiles.length, mines)}x
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt-4">
          {!gameStarted ? (
            <button
              onClick={() => {
                setGameStarted(true);
                sendMineToBackend();
              }}
              className={`px-6 py-2 rounded-xl font-bold transition duration-300 ${
                "bg-green-500 hover:bg-green-600 text-black" // 🟢 Start Game
              }`}
            >
              ▶ Start Game
            </button>
          ) : (
            <button
              onClick={Cashout}
              className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-xl font-bold"
            >
              💰 Bet Placed
            </button>
          )}
        </div>

        {gameStarted &&
          clickedTiles.length > 0 &&
          !clickedTiles.some((i) => bombTiles.includes(i)) && // ✅ check against bombs
          !lostTile && ( // ✅ hide when lost
            <button
              onClick={() => {
                const multiplier = getMultiplier(clickedTiles.length, mines);
                const earnings = (betAmount * multiplier).toFixed(2);
                // alert(`🎉 Cashout: ${earnings} INR`);
                handleCashout(Number(earnings));
              }}
              className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-lg font-bold shadow-md hover:bg-yellow-300"
            >
              💸 Cashout{" "}
              <span>
                {(
                  betAmount * Number(getMultiplier(clickedTiles.length, mines))
                ).toFixed(2)}
              </span>
            </button>
          )}

        {/* Bet Controls */}
        <div className="flex justify-between items-center bg-[#2a2a40] px-4 py-2 rounded-full shadow">
          <span className="text-xs text-gray-300">Bet Amount</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setBetAmount((prev) => Math.max(1, prev - 1))}
              disabled={gameStarted}
              className="text-xl px-2 hover:text-red-400"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              value={betAmount}
              onChange={(e) =>
                !gameStarted && setBetAmount(Math.max(1, +e.target.value))
              }
              className="bg-[#1e1e2f] px-2 py-1 rounded text-white text-sm w-20 text-center outline-none"
            />
            <button
              onClick={() => setBetAmount((prev) => prev + 1)}
              disabled={gameStarted}
              className="text-xl px-2 hover:text-green-400"
            >
              +
            </button>
          </div>
        </div>

        {/* Balance */}
        <div className="flex justify-between text-xs pt-1 text-gray-300">
          <span className="font-semibold">AVAILABLE BALANCE</span>
          <span className="text-cyan-400 font-bold">{balance} INR</span>
        </div>
      </div>
    </div>
  );
};

export default Mine;
