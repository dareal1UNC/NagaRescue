# NagaRescue Workspace (root)

This workspace contains multiple related NagaRescue projects. This root README summarizes each subproject and provides quick-start commands. It intentionally excludes the `prototype---NagaRescue` project.

## Projects

- **NAGARESCUE-FinalWeb** (web frontend)
  - Path: NAGARESCUE-Web/NAGARESCUE-FinalWeb
  - Tech: Vite + React + TypeScript
  - Purpose: Web dashboard, mapping, and user interfaces.

- **nagarescue-sms-gateway** (backend SMS gateway)
  - Path: nagarescue-sms-gateway
  - Tech: Node.js (Express), Twilio (or another SMS provider), Firebase/db integrations.
  - Purpose: Receive and dispatch SMS, handle SOS/status messages, integrate with database.

- **prototype---NagaRescue-gab** (mobile prototypes)
  - Path: prototype---NagaRescue-gab
  - Tech: Expo / React Native
  - Purpose: Mobile prototypes and integration experiments.

## Quick Start

Prerequisites: Node.js (LTS) and npm installed. For mobile development, install Expo CLI (`npm install -g expo-cli`).

1) NAGARESCUE-FinalWeb

```bash
cd NAGARESCUE-Web/NAGARESCUE-FinalWeb
npm install
npm run dev    # development server
npm run build  # production build
```

2) nagarescue-sms-gateway

```bash
cd nagarescue-sms-gateway
npm install
# set env vars or copy .env.example with Firebase/Twilio/etc credentials
npm start      # or npm run dev if available
```

3) prototype---NagaRescue-gab (mobile)

```bash
cd prototype---NagaRescue-gab
npm install
npm start      # or expo start
# use Expo devtools to run on device or emulator
```

## Notes

- Check each subproject's `src` or config files for Firebase and other required credentials.
- Inspect each subproject's own `package.json` and `README.md` (if present) for exact scripts and additional setup.

## Contributing

- Open an issue to discuss larger changes.
- Keep commits focused and add clear PR descriptions.

## License

No license file is included at the root. Add a `LICENSE` at the workspace root if you intend to open-source the code.
