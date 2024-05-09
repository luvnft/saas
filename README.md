<img width="1788" alt="Cogify.social" src="https://github.com/Shubham-sharma8/saas/assets/96993718/ef81b3ff-bcf1-4ced-9442-08cece819a77">

# Cogify.Social Platform - Your Gateway to Enhanced AI-Based SAAS!🎉🤖

Welcome to the git repository for Cogify.Social, the ultimate interactive web platform designed to Chatgpt-4 based conversation **Free always, no ads and Whatsapp usability**. 
Powered by cutting-edge technologies like Next.js 13, React, TypeScript, and more, this platform offers users a rich blend of features including Chatgpt-4 conversations, AI-driven image generation, insightful image analysis, and lifelike text-to-speech functionalities and much more. Dive into a world where technology meets creativity, fully live-hosted and free to use, backed by an open-source community's excellence.

### Features 🚀

- **Live Conversations:** Engage in best AI-Based conversation with CHATGPT-4-TURBO. Including streaming, always free forever, no ads.  💬
- **AI-Powered Image Generation:** Bring your imaginations to life with just a few clicks. Generate up to 7 images at once with CHATGPT-4 Dall-E-3 🎨
- **Image Insights:** Get deep insights into the content and context of images. And ask questions regarding your image🔍
- **Whatsapp integration:** Send your message to [Here](https://wa.me/919831047163) to continue these awesome features in whatsapp. Start enjoying by saying **Hi**. 
- **Text to Speech:** Convert your text into natural-sounding speech seamlessly with more then 5 speaking model. 🗣️
- **More features are on the way**
- ### We build everything at no cost, Including Web domain, Chatgpt API Key, 24*7 Web hosting, SMTP Email Hosting for marketing etc - **Everything** .
- Fill this form and we will reach out to you with all the information quickly. [Help](https://cogify.social/help)

<img width="1788" alt="Cogify Image Generation" src="https://github.com/Shubham-sharma8/saas/assets/96993718/63efb566-c281-4220-bfc4-906632841317">

### Live Demo

Check out Cogify.Social live in action! Visit: [Cogify.social](http://cogify.social)

# Installation and Setup

To set up your own version of Cogify.Social, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shubham-sharma8/saas
   cd saas
   ```

2. **Install dependencies:**
   ```bash
   npm i
   ```

3. **Environment Variables:**
   Copy the `.env.example` file to `.env` and update the environment variables as per your requirements.

   ```bash
   cp .env.example .env
   ```
5. **Run the prisma for database:**
   ```bash
   npx prisma db generate
   npx prisma db push
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

**The site should now be running on [http://localhost:3000](http://localhost:3000)!**


# ✨**IMPORTANT**

 **Run the database in server:**
## Setting Up and Hosting the Database on Ubuntu 🐬

Cogify.Social uses a MySQL database to manage data. Here is a step-by-step guide to help you create and host the database on an Ubuntu server:

### Prerequisites:
Make sure you have Ubuntu server set up and you have administrative (sudo) rights.

### Step 1: Update Ubuntu packages:
```bash
sudo apt update
```

### Step 2: Install MySQL Server:
```bash
sudo apt install mysql-server
```

### Step 3: Check MySQL Service Status:
This step ensures that MySQL is installed and running on your system.
```bash
sudo systemctl status mysql
```

### Step 4: Secure Access to MySQL:
Log into MySQL shell as the root user:
```bash
sudo mysql
```

### Step 5: Create a New MySQL User:
Once inside MySQL Shell, you might want to create a new user and grant privileges for better security and management. Execute the following SQL commands:
```sql
SELECT user FROM mysql.user;
CREATE USER 'USERNAME'@'%' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```

### Step 6: Obtain Your Server IP Address:
This command fetches the public IP of your server, which you might need for accessing your MySQL server remotely.
```bash
curl ifconfig.me
```

### Step 7: Configure MySQL to Allow Remote Connections:
By default, MySQL doesn't allow connections from remote hosts. Edit the MySQL config file to change this:
```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```
In the editor, look for the line that says `bind-address` and change its value from `127.0.0.1` to `0.0.0.0`.

### Step 8: Restart MySQL to Apply Changes:
```bash
sudo systemctl restart mysql
```

###  Your Database is now ready 🎉:
Your MySQL database is now set up and configured to accept connections remotely using the public IP of your server.

ℹ️ **Note:** For security purposes, it is highly recommended to use a firewall to restrict access to your MySQL server and to use SSL for data encryption if your database will be accessed over the internet.

✅ **For cloud server like azure and AWS etc:** Open port 3306, 80 TCP. 

💭**Your database URL: DATABASE_URL= mysql://USERNAME:PASSWORD@YOURSERVERIP:3306/sample?usessl=true**

🛑**Invalid Website:** If you getting this error in your button right. Create an account with [Crisp](https://crisp.chat/) and update **components/crisp-chat.tsx** with your credentials. 


# Built With 🛠️

- **Next.js 14** - The React framework for production
- **React** - A JavaScript library for building user interfaces
- **TypeScript (TSX)** - Superset of JavaScript for type-safe code
- **Clerk** - For secure user management and authentication
- **Aceternity UI** and **Shadch UI** - Advanced UI frameworks for modern React applications
- **Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs
- **Prisma** - Next-generation ORM for Node.js and TypeScript
- **Stripe** - Integrated payment solutions
- **Crisp** - For support and quick help.

### Whatsapp 📱

![Whatsapp](https://github.com/Shubham-sharma8/saas/assets/96993718/fbc281dc-8616-4263-94df-42d742068303)


# Contribution Guidelines 🤝

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:
- Reporting a bug 🐛
- Discussing the current state of the code 🔍
- Submitting a fix 🔧
- Proposing new features 💡

Feel free to contribute or check our [contribution guidelines](https://cogify.social/[term-of-service](https://cogify.social/term-of-service)) for more details.

### License 📜

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

### Connect With Us 🌐

Join our dynamic community and start contributing. For more information, or to join our team, please visit [Join-us](https://cogify.social/join-us).


We're excited to see how you use and enhance Cogify.Social. Get started today and unleash your creativity! 🌟
[Cogify.social](hts://cogify.social/)
