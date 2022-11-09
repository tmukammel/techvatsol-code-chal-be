# Technovative Solutions coding challenge backend
Technovative Solutions code challenge System design (wiki) and backend project.

# Setup for development (MacOS)
## Prerequisites

1. brew => `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
1. nvm and npm => `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`
2. Node => `nvm install --lts` or `brew install node`
3. MySQL => `brew install mysql`

## Setup

### (a) Clone the repo

```
git clone https://github.com/tmukammel/techvatsol-code-chal-be.git
```

### (b) Setup env files

```bash
# Setp 01
npm run dotenv

# Step 02
#   You have to create a database in mysql and set the database config in
#   .env.development (optionally .env.production)
```

### (c) Install dependencies

```bash
npm install

# or
yarn
```

### (d) Migrate database

```
npm run migrate
```

### (e) Run

```bash
# Watch mode
npm run watch

# Dev mode
npm run build
npm run dev

# Production build (uses .env.production)
npm run prod
```

### (f) Debug

```bash
# 1. Go to VSCode Run and Debug console
# 2. Run the Launch Program (which is already configured in ./.vscode/launch.json)
# 3. Set your breakpoints and probably call target breakpoint associated API to debug
```

## Usage

### Postman

> You can try out the APIs downloading and importing [this](https://www.getpostman.com/collections/6385d7940693ecae9928) postman collection from Import > Link option.
> 
> Please also import this postman environment as a file or Raw text\
> and set the key `URL` to the `Port` you set in the `.env` file.

```json
{
	"id": "a49c4668-5db8-443e-8bb7-763949da607b",
	"name": "techvatsol-be-local",
	"values": [
		{
			"key": "URL",
			"value": "http://127.0.01:3007",
			"enabled": true
		}
	],
	"_postman_variable_scope": "environment",
	"_postman_exported_at": "2022-11-09T03:37:53.120Z",
	"_postman_exported_using": "Postman/10.0.42"
}
```
