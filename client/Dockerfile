FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
# Install `serve` globally for serving the build
RUN npm install -g serve
# Expose the port
EXPOSE 3000

# Start the application
CMD ["npx", "serve", "-s", "build", "-l", "3000"] 