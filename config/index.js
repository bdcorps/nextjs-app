const { isProduction } = process.env

export const server = isProduction ? "https://url.com" : 'http://localhost:3000'