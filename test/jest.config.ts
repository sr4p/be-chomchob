import { defaults as tsjPreset } from 'ts-jest/presets'

export default {
  globals: {
    server: undefined,
    bearerToken: undefined
  },
  transform: {
    ...tsjPreset.transform,
  },
  testPathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  testEnvironment: "node"
}