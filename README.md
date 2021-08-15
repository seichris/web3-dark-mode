# Web3 Dark Mode

Based on Stylebot.

## Development

### Firefox

- Run `yarn watch:firefox` to build locally
- Run `yarn start:firefox` to launch Firefox with development build

### Chrome/Edge

- Run `yarn watch` to build locally
- Open `chrome://extensions` page.
- Disable the official Stylebot version.
- Enable the Developer mode.
- Click Load unpacked extension button
- Navigate to the project's `dist/` folder

### Release

- Add entry to `CHANGELOG`
- Update version in `package.json` and `src/extension/manifest.json`
- Chrome and Edge: Run `yarn build` and manually create zip for distribution from `dist/`
- Firefox: Run `yarn build:firefox` and manually create zip for distribution from `firefox-dist/`

### Patches

Patches to dependencies are located under `/patches` and are automatically applied on running `yarn` using [patch-package](https://github.com/ds300/patch-package).

- `bootstrap-vue+2.21.1.patch` - Patch to work around a [requestAnimationFrame issue](https://github.com/facebook/react/issues/16606) in Firefox extensions.

## License

MIT
