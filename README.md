# 🔎 Beacon

Beacon is a simple Ethereum explorer built with viem. It provides real-time updates by using viem's watch block function to track new blocks and update the interface instantly.

![Homepage](./public/home.png)

This project was bootstrapped using [create-t3-app]()

## 🚀 Getting Started

To get started with the Beacon, follow these simple steps:

1. Clone the Repository: Begin by cloning the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Envoy-VC/blockchain-explorer.git
   ```

2. Install Dependencies: Navigate to the cloned repository and install the required dependencies by running the following command:
   ```bash
   pnpm install
   ```
3. Create a .env.local file: Create a `.env.local` file in the root directory of your project and add the following environment variables:

   ```bash
   NEXT_PUBLIC_RPC_URL='YOUR_RPC_URL'
   ```

   You can obtain your RPC URL from [Alchemy](https://dashboard.alchemy.com). You can also use [Infura](https://www.infura.io/) or [Ankr](https://www.ankr.com/) as your RPC provider.

4. Run the Project: Once you have installed the dependencies and added the required environment variables, you are ready to run the project. To start the development server, run the following command:

   ```bash
    pnpm run dev
   ```

---

## License

This project is licensed under the MIT License. Please see the [LICENSE](./LICENSE)

---
