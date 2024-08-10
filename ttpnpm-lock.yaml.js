lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@heroicons/react':
        specifier: ^2.1.4
        version: 2.1.4(react@19.0.0-rc-f38c22b244-20240704)
      '@tailwindcss/forms':
        specifier: ^0.5.7
        version: 0.5.7(tailwindcss@3.4.4)
      '@vercel/postgres':
        specifier: ^0.9.0
        version: 0.9.0
      autoprefixer:
        specifier: 10.4.19
        version: 10.4.19(postcss@8.4.38)
      bcrypt:
        specifier: ^5.1.1
        version: 5.1.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      next:
        specifier: 15.0.0-canary.56
        version: 15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704)
      next-auth:
        specifier: 5.0.0-beta.19
        version: 5.0.0-beta.19(next@15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704)
      postcss:
        specifier: 8.4.38
        version: 8.4.38
      react:
        specifier: 19.0.0-rc-f38c22b244-20240704
        version: 19.0.0-rc-f38c22b244-20240704
      react-dom:
        specifier: 19.0.0-rc-f38c22b244-20240704
        version: 19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704)
      tailwindcss:
        specifier: 3.4.4
        version: 3.4.4
      typescript:
        specifier: 5.5.2
        version: 5.5.2
      use-debounce:
        specifier: ^10.0.1
        version: 10.0.1(react@19.0.0-rc-f38c22b244-20240704)
      zod:
        specifier: ^3.23.8
        version: 3.23.8
    devDependencies:
      '@types/bcrypt':
        specifier: ^5.0.2
        version: 5.0.2
      '@types/node':
        specifier: 20.14.8
        version: 20.14.8
      '@types/react':
        specifier: 18.3.3
        version: 18.3.3
      '@types/react-dom':
        specifier: 18.3.0
        version: 18.3.0
      '@typescript-eslint/eslint-plugin':
        specifier: ^8.0.1
        version: 8.0.1(@typescript-eslint/parser@8.0.1(eslint@9.8.0)(typescript@5.5.2))(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/parser':
        specifier: ^8.0.1
        version: 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      eslint:
        specifier: ^9.8.0
        version: 9.8.0
      eslint-config-prettier:
        specifier: ^9.1.0
        version: 9.1.0(eslint@9.8.0)
      eslint-plugin-prettier:
        specifier: ^5.2.1
        version: 5.2.1(eslint-config-prettier@9.1.0(eslint@9.8.0))(eslint@9.8.0)(prettier@3.3.3)
      eslint-plugin-react:
        specifier: ^7.35.0
        version: 7.35.0(eslint@9.8.0)
      globals:
        specifier: ^15.9.0
        version: 15.9.0
      prettier:
        specifier: ^3.3.3
        version: 3.3.3
      typescript-eslint:
        specifier: ^8.0.1
        version: 8.0.1(eslint@9.8.0)(typescript@5.5.2)

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@auth/core@0.32.0':
    resolution: {integrity: sha512-3+ssTScBd+1fd0/fscAyQN1tSygXzuhysuVVzB942ggU4mdfiTbv36P0ccVnExKWYJKvu3E2r3/zxXCCAmTOrg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      nodemailer: ^6.8.0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true

  '@emnapi/runtime@1.2.0':
    resolution: {integrity: sha512-bV21/9LQmcQeCPEg3BDFtvwL6cwiTMksYNWQQ4KOxCZikEGalWtenoZ0wCiukJINlGCIi2KXx01g4FoH/LxpzQ==}

  '@eslint-community/eslint-utils@4.4.0':
    resolution: {integrity: sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.11.0':
    resolution: {integrity: sha512-G/M/tIiMrTAxEWRfLfQJMmGNX28IxBg4PBz8XqQhqUHLFI6TL2htpIB1iQCj144V5ee/JaKyT9/WZ0MGZWfA7A==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/config-array@0.17.1':
    resolution: {integrity: sha512-BlYOpej8AQ8Ev9xVqroV7a02JK3SkBAaN9GfMMH9W6Ch8FlQlkjGw4Ir7+FgYwfirivAf4t+GtzuAxqfukmISA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/eslintrc@3.1.0':
    resolution: {integrity: sha512-4Bfj15dVJdoy3RfZmmo86RK1Fwzn6SstsvK9JS+BaVKqC6QQQQyXekNaC+g+LKNgkQ+2VhGAzm6hO40AhMR3zQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/js@9.8.0':
    resolution: {integrity: sha512-MfluB7EUfxXtv3i/++oh89uzAr4PDI4nn201hsp+qaXqsjAWzinlZEHEfPgAX4doIlKvPG/i0A9dpKxOLII8yA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/object-schema@2.1.4':
    resolution: {integrity: sha512-BsWiH1yFGjXXS2yvrf5LyuoSIIbPrGUWob917o+BTKuZ7qJdxX8aJLRxs1fS9n6r7vESrq1OUqb68dANcFXuQQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@heroicons/react@2.1.4':
    resolution: {integrity: sha512-ju0wj0wwrUTMQ2Yceyrma7TKuI3BpSjp+qKqV81K9KGcUHdvTMdiwfRc2cwXBp3uXtKuDZkh0v03nWOQnJFv2Q==}
    peerDependencies:
      react: '>= 16'

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/retry@0.3.0':
    resolution: {integrity: sha512-d2CGZR2o7fS6sWB7DG/3a95bGKQyHMACZ5aW8qGkkqQpUoZV6C0X7Pc7l4ZNMZkfNBf4VWNe9E1jRsf0G146Ew==}
    engines: {node: '>=18.18'}

  '@img/sharp-darwin-arm64@0.33.4':
    resolution: {integrity: sha512-p0suNqXufJs9t3RqLBO6vvrgr5OhgbWp76s5gTRvdmxmuv9E1rcaqGUsl3l4mKVmXPkTkTErXediAui4x+8PSA==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.33.4':
    resolution: {integrity: sha512-0l7yRObwtTi82Z6ebVI2PnHT8EB2NxBgpK2MiKJZJ7cz32R4lxd001ecMhzzsZig3Yv9oclvqqdV93jo9hy+Dw==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.0.2':
    resolution: {integrity: sha512-tcK/41Rq8IKlSaKRCCAuuY3lDJjQnYIW1UXU1kxcEKrfL8WR7N6+rzNoOxoQRJWTAECuKwgAHnPvqXGN8XfkHA==}
    engines: {macos: '>=11', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.0.2':
    resolution: {integrity: sha512-Ofw+7oaWa0HiiMiKWqqaZbaYV3/UGL2wAPeLuJTx+9cXpCRdvQhCLG0IH8YGwM0yGWGLpsF4Su9vM1o6aer+Fw==}
    engines: {macos: '>=10.13', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.0.2':
    resolution: {integrity: sha512-x7kCt3N00ofFmmkkdshwj3vGPCnmiDh7Gwnd4nUwZln2YjqPxV1NlTyZOvoDWdKQVDL911487HOueBvrpflagw==}
    engines: {glibc: '>=2.26', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.0.2':
    resolution: {integrity: sha512-iLWCvrKgeFoglQxdEwzu1eQV04o8YeYGFXtfWU26Zr2wWT3q3MTzC+QTCO3ZQfWd3doKHT4Pm2kRmLbupT+sZw==}
    engines: {glibc: '>=2.28', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.0.2':
    resolution: {integrity: sha512-cmhQ1J4qVhfmS6szYW7RT+gLJq9dH2i4maq+qyXayUSn9/3iY2ZeWpbAgSpSVbV2E1JUL2Gg7pwnYQ1h8rQIog==}
    engines: {glibc: '>=2.28', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.0.2':
    resolution: {integrity: sha512-E441q4Qdb+7yuyiADVi5J+44x8ctlrqn8XgkDTwr4qPJzWkaHwD489iZ4nGDgcuya4iMN3ULV6NwbhRZJ9Z7SQ==}
    engines: {glibc: '>=2.26', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.0.2':
    resolution: {integrity: sha512-3CAkndNpYUrlDqkCM5qhksfE+qSIREVpyoeHIU6jd48SJZViAmznoQQLAv4hVXF7xyUB9zf+G++e2v1ABjCbEQ==}
    engines: {musl: '>=1.2.2', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.0.2':
    resolution: {integrity: sha512-VI94Q6khIHqHWNOh6LLdm9s2Ry4zdjWJwH56WoiJU7NTeDwyApdZZ8c+SADC8OH98KWNQXnE01UdJ9CSfZvwZw==}
    engines: {musl: '>=1.2.2', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.33.4':
    resolution: {integrity: sha512-2800clwVg1ZQtxwSoTlHvtm9ObgAax7V6MTAB/hDT945Tfyy3hVkmiHpeLPCKYqYR1Gcmv1uDZ3a4OFwkdBL7Q==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.33.4':
    resolution: {integrity: sha512-RUgBD1c0+gCYZGCCe6mMdTiOFS0Zc/XrN0fYd6hISIKcDUbAW5NtSQW9g/powkrXYm6Vzwd6y+fqmExDuCdHNQ==}
    engines: {glibc: '>=2.28', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-s390x@0.33.4':
    resolution: {integrity: sha512-h3RAL3siQoyzSoH36tUeS0PDmb5wINKGYzcLB5C6DIiAn2F3udeFAum+gj8IbA/82+8RGCTn7XW8WTFnqag4tQ==}
    engines: {glibc: '>=2.31', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.33.4':
    resolution: {integrity: sha512-GoR++s0XW9DGVi8SUGQ/U4AeIzLdNjHka6jidVwapQ/JebGVQIpi52OdyxCNVRE++n1FCLzjDovJNozif7w/Aw==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.33.4':
    resolution: {integrity: sha512-nhr1yC3BlVrKDTl6cO12gTpXMl4ITBUZieehFvMntlCXFzH2bvKG76tBL2Y/OqhupZt81pR7R+Q5YhJxW0rGgQ==}
    engines: {musl: '>=1.2.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.33.4':
    resolution: {integrity: sha512-uCPTku0zwqDmZEOi4ILyGdmW76tH7dm8kKlOIV1XC5cLyJ71ENAAqarOHQh0RLfpIpbV5KOpXzdU6XkJtS0daw==}
    engines: {musl: '>=1.2.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.33.4':
    resolution: {integrity: sha512-Bmmauh4sXUsUqkleQahpdNXKvo+wa1V9KhT2pDA4VJGKwnKMJXiSTGphn0gnJrlooda0QxCtXc6RX1XAU6hMnQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [wasm32]

  '@img/sharp-win32-ia32@0.33.4':
    resolution: {integrity: sha512-99SJ91XzUhYHbx7uhK3+9Lf7+LjwMGQZMDlO/E/YVJ7Nc3lyDFZPGhjwiYdctoH2BOzW9+TnfqcaMKt0jHLdqw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.33.4':
    resolution: {integrity: sha512-3QLocdTRVIrFNye5YocZl+KKpYKP+fksi1QhmOArgx7GyhIbQp/WrJRu176jm8IxromS7RIkzMiMINVdBtC8Aw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.5':
    resolution: {integrity: sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.4.15':
    resolution: {integrity: sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@mapbox/node-pre-gyp@1.0.11':
    resolution: {integrity: sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==}
    hasBin: true

  '@neondatabase/serverless@0.9.4':
    resolution: {integrity: sha512-D0AXgJh6xkf+XTlsO7iwE2Q1w8981E1cLCPAALMU2YKtkF/1SF6BiAzYARZFYo175ON+b1RNIy9TdSFHm5nteg==}

  '@next/env@15.0.0-canary.56':
    resolution: {integrity: sha512-NHKKx0jysNIcnx5c35TbK4nTUjp0HU4Ba7yaQBQDnU7/03TyhGR6WdL2SqsC6ex9mDleaozBPUcKPktOM3C4uA==}

  '@next/swc-darwin-arm64@15.0.0-canary.56':
    resolution: {integrity: sha512-Gfv1o2zwp3q/u7uqf7BYDMZJ0nAE677kIj/RauqWax3eQpIQgRQtsGz+HSL72Hn5s2CBqPoOcTxy/Tc0U6xaRw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.0.0-canary.56':
    resolution: {integrity: sha512-Gpki7BNqNkeKCqtj+MYdV+6XVCBcNfhn/viOHvYkZK5KEJaoPyXb4xbMGhE7czcEtG2WBZ8oWAq1fZ59+TCvlA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.0.0-canary.56':
    resolution: {integrity: sha512-n5ZCuYt7rVFcJr8hRQDhEowZGHxs7qecizzDUgsAu/Tlfw2tpgoTN52VEozVey8JmM36iHPpnOSgn13RJsbeaQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.0.0-canary.56':
    resolution: {integrity: sha512-Of58mUgV2W63CjP+v6xYDBlTZaCb1KD0hk+LqSQ0RIKQFQIqwza58GH5vhtv8oiYSYrt/YboLDNi6UGfWrTi3g==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.0.0-canary.56':
    resolution: {integrity: sha512-5sU9Hmeu5+1rHPDfZixx0QLjg1RIeDNEWhLZKC7i7Bt8vrwl/tPsdoHaBT1NdHujwvsn01/23uOZTsvYP/DBVw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.0.0-canary.56':
    resolution: {integrity: sha512-z+mrYywY8uLzB4RhkUM4OKw6+3XnlGekuhnsIuP018Hxp0Y5j/Sfvqjbca9h8/Y0iG7pEm3T85hKu+F7Gt1OzA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.0.0-canary.56':
    resolution: {integrity: sha512-D0+KDxxzuZXhwuE1Ta0h8pNPT8SIMPhcrvAkdTXfX2VqruDp4QnIgfZURhajxgeQHZmkTuMaEYS+ZdEr19KtiA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-ia32-msvc@15.0.0-canary.56':
    resolution: {integrity: sha512-EG85/t7+SLXfRRYGT+BgRt9NBao0prq5ft7LXTj0L3p5oFHPm27zjIPDx5zopW1QLyv7StXqfUvddAaNCZzxAg==}
    engines: {node: '>= 10'}
    cpu: [ia32]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.0.0-canary.56':
    resolution: {integrity: sha512-gmXZG/vFoZJ/0mWVPUVQNLs5yYGhkNSnGfo7pjI/C+B2ql/mrgP/+cXZh6EkgVG9AQX3I+LGdRM978RQKMRp0Q==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@panva/hkdf@1.2.0':
    resolution: {integrity: sha512-97ZQvZJ4gJhi24Io6zI+W7B67I82q1I8i3BSzQ4OyZj1z4OW87/ruF26lrMES58inTKLy2KgVIDcx8PU4AaANQ==}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@pkgr/core@0.1.1':
    resolution: {integrity: sha512-cq8o4cWH0ibXh9VGi5P20Tu9XF/0fFXl9EUinr9QfTM7a7p0oTA4iJRCQWppXR1Pg8dSM0UCItCkPwsk9qWWYA==}
    engines: {node: ^12.20.0 || ^14.18.0 || >=16.0.0}

  '@swc/helpers@0.5.11':
    resolution: {integrity: sha512-YNlnKRWF2sVojTpIyzwou9XoTNbzbzONwRhOoniEioF1AtaitTvVZblaQRrAzChWQ1bLYyYSWzM18y4WwgzJ+A==}

  '@tailwindcss/forms@0.5.7':
    resolution: {integrity: sha512-QE7X69iQI+ZXwldE+rzasvbJiyV/ju1FGHH0Qn2W3FKbuYtqp8LKcy6iSw79fVUT5/Vvf+0XgLCeYVG+UV6hOw==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || >= 3.0.0-alpha.1'

  '@types/bcrypt@5.0.2':
    resolution: {integrity: sha512-6atioO8Y75fNcbmj0G7UjI9lXN2pQ/IGJ2FWT4a/btd0Lk9lQalHLKhkgKVZ3r+spnmWUKfbMi1GEe9wyHQfNQ==}

  '@types/cookie@0.6.0':
    resolution: {integrity: sha512-4Kh9a6B2bQciAhf7FSuMRRkUWecJgJu9nPnx3yzpsfXX/c50REIqpHY4C82bXP90qrLtXtkDxTZosYO3UpOwlA==}

  '@types/node@20.14.8':
    resolution: {integrity: sha512-DO+2/jZinXfROG7j7WKFn/3C6nFwxy2lLpgLjEXJz+0XKphZlTLJ14mo8Vfg8X5BWN6XjyESXq+LcYdT7tR3bA==}

  '@types/pg@8.11.6':
    resolution: {integrity: sha512-/2WmmBXHLsfRqzfHW7BNZ8SbYzE8OSk7i3WjFYvfgRHj7S1xj+16Je5fUKv3lVdVzk/zn9TXOqf+avFCFIE0yQ==}

  '@types/prop-types@15.7.12':
    resolution: {integrity: sha512-5zvhXYtRNRluoE/jAp4GVsSduVUzNWKkOZrCDBWYtE7biZywwdC2AcEzg+cSMLFRfVgeAFqpfNabiPjxFddV1Q==}

  '@types/react-dom@18.3.0':
    resolution: {integrity: sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==}

  '@types/react@18.3.3':
    resolution: {integrity: sha512-hti/R0pS0q1/xx+TsI73XIqk26eBsISZ2R0wUijXIngRK9R/e7Xw/cXVxQK7R5JjW+SV4zGcn5hXjudkN/pLIw==}

  '@typescript-eslint/eslint-plugin@8.0.1':
    resolution: {integrity: sha512-5g3Y7GDFsJAnY4Yhvk8sZtFfV6YNF2caLzjrRPUBzewjPCaj0yokePB4LJSobyCzGMzjZZYFbwuzbfDHlimXbQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      '@typescript-eslint/parser': ^8.0.0 || ^8.0.0-alpha.0
      eslint: ^8.57.0 || ^9.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/parser@8.0.1':
    resolution: {integrity: sha512-5IgYJ9EO/12pOUwiBKFkpU7rS3IU21mtXzB81TNwq2xEybcmAZrE9qwDtsb5uQd9aVO9o0fdabFyAmKveXyujg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/scope-manager@8.0.1':
    resolution: {integrity: sha512-NpixInP5dm7uukMiRyiHjRKkom5RIFA4dfiHvalanD2cF0CLUuQqxfg8PtEUo9yqJI2bBhF+pcSafqnG3UBnRQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/type-utils@8.0.1':
    resolution: {integrity: sha512-+/UT25MWvXeDX9YaHv1IS6KI1fiuTto43WprE7pgSMswHbn1Jm9GEM4Txp+X74ifOWV8emu2AWcbLhpJAvD5Ng==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/types@8.0.1':
    resolution: {integrity: sha512-PpqTVT3yCA/bIgJ12czBuE3iBlM3g4inRSC5J0QOdQFAn07TYrYEQBBKgXH1lQpglup+Zy6c1fxuwTk4MTNKIw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/typescript-estree@8.0.1':
    resolution: {integrity: sha512-8V9hriRvZQXPWU3bbiUV4Epo7EvgM6RTs+sUmxp5G//dBGy402S7Fx0W0QkB2fb4obCF8SInoUzvTYtc3bkb5w==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/utils@8.0.1':
    resolution: {integrity: sha512-CBFR0G0sCt0+fzfnKaciu9IBsKvEKYwN9UZ+eeogK1fYHg4Qxk1yf/wLQkLXlq8wbU2dFlgAesxt8Gi76E8RTA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0

  '@typescript-eslint/visitor-keys@8.0.1':
    resolution: {integrity: sha512-W5E+o0UfUcK5EgchLZsyVWqARmsM7v54/qEq6PY3YI5arkgmCzHiuk0zKSJJbm71V0xdRna4BGomkCTXz2/LkQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@vercel/postgres@0.9.0':
    resolution: {integrity: sha512-WiI2g3+ce2g1u1gP41MoDj2DsMuQQ+us7vHobysRixKECGaLHpfTI7DuVZmHU087ozRAGr3GocSyqmWLLo+fig==}
    engines: {node: '>=14.6'}

  abbrev@1.1.1:
    resolution: {integrity: sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==}

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.12.1:
    resolution: {integrity: sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  agent-base@6.0.2:
    resolution: {integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==}
    engines: {node: '>= 6.0.0'}

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.0.1:
    resolution: {integrity: sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  aproba@2.0.0:
    resolution: {integrity: sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==}

  are-we-there-yet@2.0.0:
    resolution: {integrity: sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  array-buffer-byte-length@1.0.1:
    resolution: {integrity: sha512-ahC5W1xgou+KTXix4sAO8Ki12Q+jf4i0+tmk3sC+zgcynshkHxzpXdImBehiUYKKKDwvfFiJl1tZt6ewscS1Mg==}
    engines: {node: '>= 0.4'}

  array-includes@3.1.8:
    resolution: {integrity: sha512-itaWrbYbqpGXkGhZPGUulwnhVf5Hpy1xiCFsGqyIGglbBxmG5vSjxQen3/WGOjPpNEv1RtBLKxbmVXm8HpJStQ==}
    engines: {node: '>= 0.4'}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.2:
    resolution: {integrity: sha512-djYB+Zx2vLewY8RWlNCUdHjDXs2XOgm602S9E7P/UpHgfeHL00cRiIF+IN/G/aUJ7kGPb6yO/ErDI5V2s8iycA==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.2:
    resolution: {integrity: sha512-Ewyx0c9PmpcsByhSW4r+9zDU7sGjFc86qf/kKtuSCRdhfbk0SNLLkaT5qvcHnRGgc5NP/ly/y+qkXkqONX54CQ==}
    engines: {node: '>= 0.4'}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.3:
    resolution: {integrity: sha512-bMxMKAjg13EBSVscxTaYA4mRc5t1UAXa2kXiGTNfZ079HIWXEkKmkgFrh/nJqamaLSrXO5H4WFFkPEaLJWbs3A==}
    engines: {node: '>= 0.4'}

  autoprefixer@10.4.19:
    resolution: {integrity: sha512-BaENR2+zBZ8xXhM4pUaKUxlVdxZ0EZhjvbopwnXmxRUfqDmwSpC2lAi/QXvx7NRdPCo1WKEcEF6mV64si1z4Ew==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  bcrypt@5.1.1:
    resolution: {integrity: sha512-AGBHOG5hPYZ5Xl9KXzU5iKq9516yEmvCKDg3ecP5kX2aB6UqTeXZxk2ELnDgDm6BQSMlLt9rDB4LoSMx0rYwww==}
    engines: {node: '>= 10.0.0'}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.23.0:
    resolution: {integrity: sha512-QW8HiM1shhT2GuzkvklfjcKDiWFXHOeFCIA/huJPwHsslwcydgk7X+z2zXpEijP98UCY7HbubZt5J2Zgvf0CaQ==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bufferutil@4.0.8:
    resolution: {integrity: sha512-4T53u4PdgsXqKaIctwF8ifXlRTTmEPJ8iEPWFdGZvcf7sbwYo6FKFEX9eNNAnzFZ7EzJAQ3CJeOtCRA4rDp7Pw==}
    engines: {node: '>=6.14.2'}

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  call-bind@1.0.7:
    resolution: {integrity: sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  caniuse-lite@1.0.30001632:
    resolution: {integrity: sha512-udx3o7yHJfUxMLkGohMlVHCvFvWmirKh9JAH/d7WOLPetlH+LTL5cocMZ0t7oZx/mdlOWXti97xLZWc8uURRHg==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  chownr@2.0.0:
    resolution: {integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==}
    engines: {node: '>=10'}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color-support@1.1.3:
    resolution: {integrity: sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==}
    hasBin: true

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  console-control-strings@1.1.0:
    resolution: {integrity: sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==}

  cookie@0.6.0:
    resolution: {integrity: sha512-U71cyTamuh1CRNCfpGY6to28lxvNwPG4Guz/EVjgf3Jmzv0vlDp1atT9eS5dDjMYHucpHbWns6Lwf3BKz6svdw==}
    engines: {node: '>= 0.6'}

  cross-spawn@7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  data-view-buffer@1.0.1:
    resolution: {integrity: sha512-0lht7OugA5x3iJLOWFhWK/5ehONdprk0ISXqVFn/NFrDu+cuc8iADFrGQz5BnRK7LLU3JmkbXSxaqX+/mXYtUA==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.1:
    resolution: {integrity: sha512-4J7wRJD3ABAzr8wP+OcIcqq2dlUKp4DVflx++hs5h5ZKydWMI6/D/fAot+yh6g2tHh8fLFTvNOaVN357NvSrOQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.0:
    resolution: {integrity: sha512-t/Ygsytq+R995EJ5PZlD4Cu56sWa8InXySaViRzw9apusqsOO2bQP+SbYzAhR0pFKoB+43lYy8rWban9JSuXnA==}
    engines: {node: '>= 0.4'}

  debug@4.3.5:
    resolution: {integrity: sha512-pt0bNEmneDIvdL1Xsd9oDQ/wrQRkXDT4AUWlNZNPKvW5x/jyO9VFXkJUP07vQ2upmw5PlaITaPKc31jK13V+jg==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  delegates@1.0.0:
    resolution: {integrity: sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==}

  detect-libc@2.0.3:
    resolution: {integrity: sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==}
    engines: {node: '>=8'}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  electron-to-chromium@1.4.789:
    resolution: {integrity: sha512-0VbyiaXoT++Fi2vHGo2ThOeS6X3vgRCWrjPeO2FeIAWL6ItiSJ9BqlH8LfCXe3X1IdcG+S0iLoNaxQWhfZoGzQ==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  es-abstract@1.23.3:
    resolution: {integrity: sha512-e+HfNH61Bj1X9/jLc5v1owaLYuHdeHHSQlkhCBiTK8rBvKaULl/beGMxwrMXjpYrv4pz22BlY570vVePA2ho4A==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.0:
    resolution: {integrity: sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-iterator-helpers@1.0.19:
    resolution: {integrity: sha512-zoMwbCcH5hwUkKJkT8kDIBZSz9I6mVG//+lDCinLCGov4+r7NIy0ld8o03M0cJxl2spVf6ESYVS6/gpIfq1FFw==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.0.0:
    resolution: {integrity: sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.0.3:
    resolution: {integrity: sha512-3T8uNMC3OQTHkFUsFq8r/BwAXLHvU/9O9mE0fBc/MY5iq/8H7ncvO947LmYA6ldWw9Uh8Yhf25zu6n7nML5QWQ==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.0.2:
    resolution: {integrity: sha512-J3yBRXCzDu4ULnQwxyToo/OjdMx6akgVC7K6few0a7F/0wLtmKKN7I73AH5T2836UuXRqN7Qg+IIUw/+YJksRw==}

  es-to-primitive@1.2.1:
    resolution: {integrity: sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==}
    engines: {node: '>= 0.4'}

  escalade@3.1.2:
    resolution: {integrity: sha512-ErCHMCae19vR8vQGe50xIsVomy19rg6gFu3+r3jkEO46suLMWBksvVyoGgQV+jOfl84ZSOSlmv6Gxa89PmTGmA==}
    engines: {node: '>=6'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-prettier@9.1.0:
    resolution: {integrity: sha512-NSWl5BFQWEPi1j4TjVNItzYV7dZXZ+wP6I6ZhrBGpChQhZRUaElihE9uRRkcbRnNb76UMKDF3r+WTmNcGPKsqw==}
    hasBin: true
    peerDependencies:
      eslint: '>=7.0.0'

  eslint-plugin-prettier@5.2.1:
    resolution: {integrity: sha512-gH3iR3g4JfF+yYPaJYkN7jEl9QbweL/YfkoRlNnuIEHEz1vHVlCmWOS+eGGiRuzHQXdJFCOTxRgvju9b8VUmrw==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      '@types/eslint': '>=8.0.0'
      eslint: '>=8.0.0'
      eslint-config-prettier: '*'
      prettier: '>=3.0.0'
    peerDependenciesMeta:
      '@types/eslint':
        optional: true
      eslint-config-prettier:
        optional: true

  eslint-plugin-react@7.35.0:
    resolution: {integrity: sha512-v501SSMOWv8gerHkk+IIQBkcGRGrO2nfybfj5pLxuJNFTPxxA3PSryhXTK+9pNbtkggheDdsC0E9Q8CuPk6JKA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7

  eslint-scope@8.0.2:
    resolution: {integrity: sha512-6E4xmrTw5wtxnLA5wYL3WDfhZ/1bUBGOXV0zQvVRDOtrR8D0p6W7fs3JweNYhwRYeGvd/1CKX2se0/2s7Q/nJA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@4.0.0:
    resolution: {integrity: sha512-OtIRv/2GyiF6o/d8K7MYKKbXrOUBIK6SfkIRM4Z0dY3w+LiQ0vy3F57m0Z71bjbyeiWFiHJ8brqnmE6H6/jEuw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint@9.8.0:
    resolution: {integrity: sha512-K8qnZ/QJzT2dLKdZJVX6W4XOwBzutMYmt0lqUS+JdXgd+HTYFlonFgkJ8s44d/zMPPCnOOk0kMWCApCPhiOy9A==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    hasBin: true

  espree@10.1.0:
    resolution: {integrity: sha512-M1M6CpiE6ffoigIOWYO9UDP8TMUw9kqb21tf+08IgDYjCsOvCuDt4jQcZmoYxx+w7zlKw9/N0KXfto+I8/FrXA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-diff@1.3.0:
    resolution: {integrity: sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==}

  fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}

  file-entry-cache@8.0.0:
    resolution: {integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==}
    engines: {node: '>=16.0.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@4.0.1:
    resolution: {integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==}
    engines: {node: '>=16'}

  flatted@3.3.1:
    resolution: {integrity: sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==}

  for-each@0.3.3:
    resolution: {integrity: sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==}

  foreground-child@3.1.1:
    resolution: {integrity: sha512-TMKDUnIte6bfb5nWv7V/caI169OHgvwjb7V4WkeUvbQQdjr5rWKqHFiKWb/fcOwB+CzBT+qbWjvj+DVwRskpIg==}
    engines: {node: '>=14'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  fs-minipass@2.1.0:
    resolution: {integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==}
    engines: {node: '>= 8'}

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.6:
    resolution: {integrity: sha512-Z5kx79swU5P27WEayXM1tBi5Ze/lbIyiNgU3qyXUOf9b2rgXYyF9Dy9Cx+IQv/Lc8WCG6L82zwUPpSS9hGehIg==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  gauge@3.0.2:
    resolution: {integrity: sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.

  get-intrinsic@1.2.4:
    resolution: {integrity: sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==}
    engines: {node: '>= 0.4'}

  get-symbol-description@1.0.2:
    resolution: {integrity: sha512-g0QYk1dZBxGwk+Ngc+ltRH2IBp2f7zBkBMBJZCDerh6EhlhSR6+9irMCuT/09zD6qkarHUSn529sK/yL4S27mg==}
    engines: {node: '>= 0.4'}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@10.4.1:
    resolution: {integrity: sha512-2jelhlq3E4ho74ZyVLN03oKdAZVUa6UDZzFLVH1H7dnoax+y9qyaq8zBkfDIggjniU19z0wU18y16jMB2eyVIw==}
    engines: {node: '>=16 || 14 >=14.18'}
    hasBin: true

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@14.0.0:
    resolution: {integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==}
    engines: {node: '>=18'}

  globals@15.9.0:
    resolution: {integrity: sha512-SmSKyLLKFbSr6rptvP8izbyxJL4ILwqO9Jg23UA0sDlGlu58V59D1//I3vlc0KJphVdUR7vMjHIplYnzBxorQA==}
    engines: {node: '>=18'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  globby@11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}

  gopd@1.0.1:
    resolution: {integrity: sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  has-bigints@1.0.2:
    resolution: {integrity: sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.0.3:
    resolution: {integrity: sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==}
    engines: {node: '>= 0.4'}

  has-symbols@1.0.3:
    resolution: {integrity: sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  has-unicode@2.0.1:
    resolution: {integrity: sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  https-proxy-agent@5.0.1:
    resolution: {integrity: sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==}
    engines: {node: '>= 6'}

  ignore@5.3.1:
    resolution: {integrity: sha512-5Fytz/IraMjqpwfd34ke28PTVMjZjJG2MPn5t7OE4eUCUNf8BAa7b5WUS9/Qvr6mwOQS7Mk6vdsMno5he+T8Xw==}
    engines: {node: '>= 4'}

  import-fresh@3.3.0:
    resolution: {integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  internal-slot@1.0.7:
    resolution: {integrity: sha512-NGnrKwXzSms2qUUih/ILZ5JBqNTSa1+ZmP6flaIp6KmSElgE9qdndzS3cqjrDovwFdmwsGsLdeFgB6suw+1e9g==}
    engines: {node: '>= 0.4'}

  is-array-buffer@3.0.4:
    resolution: {integrity: sha512-wcjaerHw0ydZwfhiKbXJWLDY8A7yV7KhjQOpb83hGgGfId/aQa4TOvwyzn2PuswW2gPCYEL/nEAiSVpdOj1lXw==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}

  is-async-function@2.0.0:
    resolution: {integrity: sha512-Y1JXKrfykRJGdlDwdKlLpLyMIiWqWvuSd17TvZk68PLAOGOoF4Xyav1z0Xhoi+gCYjZVeC5SI+hYFOfvXmGRCA==}
    engines: {node: '>= 0.4'}

  is-bigint@1.0.4:
    resolution: {integrity: sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.1.2:
    resolution: {integrity: sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==}
    engines: {node: '>= 0.4'}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.13.1:
    resolution: {integrity: sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==}

  is-data-view@1.0.1:
    resolution: {integrity: sha512-AHkaJrsUVW6wq6JS8y3JnM/GJF/9cf+k20+iDzlSaJrinEo5+7vRiteOSwBhHRiAyQATN1AmY4hwzxJKPmYf+w==}
    engines: {node: '>= 0.4'}

  is-date-object@1.0.5:
    resolution: {integrity: sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.0.2:
    resolution: {integrity: sha512-0by5vtUJs8iFQb5TYUHHPudOR+qXYIMKtiUzvLIZITZUjknFmziyBJuLhVRc+Ds0dREFlskDNJKYIdIzu/9pfw==}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-function@1.0.10:
    resolution: {integrity: sha512-jsEjy9l3yiXEQ+PsXdmBwEPcOxaXWLspKdplFUVI9vq1iZgIekeC0L167qeu86czQaxed3q/Uzuw0swL0irL8A==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-negative-zero@2.0.3:
    resolution: {integrity: sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.0.7:
    resolution: {integrity: sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-path-inside@3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  is-regex@1.1.4:
    resolution: {integrity: sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.3:
    resolution: {integrity: sha512-nA2hv5XIhLR3uVzDDfCIknerhx8XUKnstuOERPNNIinXG7v9u+ohXF67vxm4TPTEPU6lm61ZkwP3c9PCB97rhg==}
    engines: {node: '>= 0.4'}

  is-string@1.0.7:
    resolution: {integrity: sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==}
    engines: {node: '>= 0.4'}

  is-symbol@1.0.4:
    resolution: {integrity: sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.13:
    resolution: {integrity: sha512-uZ25/bUAlUY5fR4OKT4rZQEBrzQWYV9ZJYGGsUmEJ6thodVJ1HX64ePQ6Z0qPWP+m+Uq6e9UugrE38jeYsDSMw==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.0.2:
    resolution: {integrity: sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==}

  is-weakset@2.0.3:
    resolution: {integrity: sha512-LvIm3/KWzS9oRFHugab7d+M/GcBXuXX5xZkzPmN+NxihdQlZUQ4dWuSV1xR/sq6upL1TJEDrfBgRepHFdBtSNQ==}
    engines: {node: '>= 0.4'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  iterator.prototype@1.1.2:
    resolution: {integrity: sha512-DR33HMMr8EzwuRL8Y9D3u2BMj8+RqSE850jfGu59kS7tbmPLzGkZmVSfyCFSDxuZiEY6Rzt3T2NA/qU+NwVj1w==}

  jackspeak@3.2.3:
    resolution: {integrity: sha512-htOzIMPbpLid/Gq9/zaz9SfExABxqRe1sSCdxntlO/aMD6u0issZQiY25n2GKQUtJ02j7z5sfptlAOMpWWOmvw==}
    engines: {node: '>=14'}

  jiti@1.21.0:
    resolution: {integrity: sha512-gFqAIbuKyyso/3G2qhiO2OM6shY6EPP/R0+mkDbyspxKazh8BXDC5FiFsUjlczgdNz/vfra0da2y+aHrusLG/Q==}
    hasBin: true

  jose@5.4.1:
    resolution: {integrity: sha512-U6QajmpV/nhL9SyfAewo000fkiRQ+Yd2H0lBxJJ9apjpOgkOcBQJWOrMo917lxLptdS/n/o/xPzMkXhF46K8hQ==}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lilconfig@2.1.0:
    resolution: {integrity: sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==}
    engines: {node: '>=10'}

  lilconfig@3.1.1:
    resolution: {integrity: sha512-O18pf7nyvHTckunPWCV1XUNXU1piu01y2b7ATJ0ppkUkk8ocqVWBrYjJBCwHDjD/ZWcfyrA0P4gKhzWGi5EINQ==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@10.2.2:
    resolution: {integrity: sha512-9hp3Vp2/hFQUiIwKo8XCeFVnrg8Pk3TYNPIR7tJADKi5YfcF7vEaK7avFHTlSy3kOKYaJQaalfEo6YuXdceBOQ==}
    engines: {node: 14 || >=16.14}

  make-dir@3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.7:
    resolution: {integrity: sha512-LPP/3KorzCwBxfeUuZmaR6bG2kdeHSbe0P2tY3FLRU4vYrjYz5hI4QZwV0njUx3jeuKe67YukQ1LSPZBKDqO/Q==}
    engines: {node: '>=8.6'}

  mini-svg-data-uri@1.4.4:
    resolution: {integrity: sha512-r9deDe9p5FJUPZAk3A59wGH7Ii9YrjjWw0jmw/liSbHl2CHiyXj6FcDXDu2K3TjVAXqiJdaw3xxwlZZr9E6nHg==}
    hasBin: true

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.4:
    resolution: {integrity: sha512-KqWh+VchfxcMNRAJjj2tnsSJdNbHsVgnkBhTNrW7AjVo6OvLtxw8zfT9oLw1JSohlFzJ8jCoTgaoXvJ+kHt6fw==}
    engines: {node: '>=16 || 14 >=14.17'}

  minipass@3.3.6:
    resolution: {integrity: sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==}
    engines: {node: '>=8'}

  minipass@5.0.0:
    resolution: {integrity: sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==}
    engines: {node: '>=8'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  minizlib@2.1.2:
    resolution: {integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==}
    engines: {node: '>= 8'}

  mkdirp@1.0.4:
    resolution: {integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==}
    engines: {node: '>=10'}
    hasBin: true

  ms@2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next-auth@5.0.0-beta.19:
    resolution: {integrity: sha512-YHu1igcAxZPh8ZB7GIM93dqgY6gcAzq66FOhQFheAdOx1raxNcApt05nNyNCSB6NegSiyJ4XOPsaNow4pfDmsg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      next: ^14 || ^15.0.0-0
      nodemailer: ^6.6.5
      react: ^18.2.0 || ^19.0.0-0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true

  next@15.0.0-canary.56:
    resolution: {integrity: sha512-Qf951CQb2dICry5QzkhpoFX6VG0er2WSdMODeeylyGpP0JPT15C4HWjoJ6Jeoqw+J8i+QvDpLR501o+oY5Qaow==}
    engines: {node: '>=18.18.0'}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      babel-plugin-react-compiler: '*'
      react: 19.0.0-rc.0
      react-dom: 19.0.0-rc.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-addon-api@5.1.0:
    resolution: {integrity: sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==}

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-gyp-build@4.8.1:
    resolution: {integrity: sha512-OSs33Z9yWr148JZcbZd5WiAXhh/n9z8TxQcdMhIOlpN9AhWpLfvVFO73+m77bBABQMaY9XSvIa+qk0jlI7Gcaw==}
    hasBin: true

  node-releases@2.0.14:
    resolution: {integrity: sha512-y10wOWt8yZpqXmOgRo77WaHEmhYQYGNA6y421PKsKYWEK8aW+cqAphborZDhqfyKrbZEN92CN1X2KbafY2s7Yw==}

  nopt@5.0.0:
    resolution: {integrity: sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==}
    engines: {node: '>=6'}
    hasBin: true

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  npmlog@5.0.1:
    resolution: {integrity: sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==}
    deprecated: This package is no longer supported.

  oauth4webapi@2.11.1:
    resolution: {integrity: sha512-aNzOnL98bL6izG97zgnZs1PFEyO4WDVRhz2Pd066NPak44w5ESLRCYmJIyey8avSBPOMtBjhF3ZDDm7bIb7UOg==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.2:
    resolution: {integrity: sha512-IRZSRuzJiynemAXPYtPe5BoI/RESNYR7TYm50MC5Mqbd3Jmw5y790sErYw3V6SryFJD64b74qQQs9wn5Bg/k3g==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.5:
    resolution: {integrity: sha512-byy+U7gp+FVwmyzKPYhW2h5l3crpmGsxl7X2s8y43IgxvG4g3QZ6CffDtsNQy1WsmZpQbO+ybo0AlW7TY6DcBQ==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.8:
    resolution: {integrity: sha512-cmopxi8VwRIAw/fkijJohSfpef5PdN0pMQJN6VC/ZKvn0LIknWD8KtgY6KlQdEc4tIjcQ3HxSMmnvtzIscdaYQ==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.0:
    resolution: {integrity: sha512-yBYjY9QX2hnRmZHAjG/f13MzmBzxzYgQhFrke06TTyKY5zSTEqkOeukBzIdVA3j3ulu8Qa3MbVFShV7T2RmGtQ==}
    engines: {node: '>= 0.4'}

  obuf@1.1.2:
    resolution: {integrity: sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pg-int8@1.0.1:
    resolution: {integrity: sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==}
    engines: {node: '>=4.0.0'}

  pg-numeric@1.0.2:
    resolution: {integrity: sha512-BM/Thnrw5jm2kKLE5uJkXqqExRUY/toLHda65XgFTBTFYZyopbKjBe29Ii3RbkvlsMoFwD+tHeGaCjjv0gHlyw==}
    engines: {node: '>=4'}

  pg-protocol@1.6.1:
    resolution: {integrity: sha512-jPIlvgoD63hrEuihvIg+tJhoGjUsLPn6poJY9N5CnlPd91c2T18T/9zBtLxZSb1EhYxBRoZJtzScCaWlYLtktg==}

  pg-types@4.0.2:
    resolution: {integrity: sha512-cRL3JpS3lKMGsKaWndugWQoLOCoP+Cic8oseVcbr0qhPzYD5DWXK+RZ9LY9wxRf7RQia4SCwQlXk0q6FCPrVng==}
    engines: {node: '>=10'}

  picocolors@1.0.1:
    resolution: {integrity: sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  possible-typed-array-names@1.0.0:
    resolution: {integrity: sha512-d7Uw+eZoloe0EHDIYoe+bQ5WXnGMOpmiZFTuMWCwpjzzkL2nTjcKiAk4hh8TjnGye2TwWOk3UXucZ+3rbmBa8Q==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.0.1:
    resolution: {integrity: sha512-mEp4xPMi5bSWiMbsgoPfcP74lsWLHkQbZc3sY+jWYd65CUwXrUaTp0fmNpa01ZcETKlIgUdFN/MpS2xZtqL9dQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.0:
    resolution: {integrity: sha512-UMz42UD0UY0EApS0ZL9o1XnLhSTtvvvLe5Dc2H2O56fvRZi+KulDyf5ctDhhtYJBGKStV2FL1fy6253cmLgqVQ==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.4.38:
    resolution: {integrity: sha512-Wglpdk03BSfXkHoQa3b/oulrotAkwrlLDRSOb9D0bN86FdRyE9lppSp33aHNPgBa0JKCoB+drFLZkQoRRYae5A==}
    engines: {node: ^10 || ^12 || >=14}

  postgres-array@3.0.2:
    resolution: {integrity: sha512-6faShkdFugNQCLwucjPcY5ARoW1SlbnrZjmGl0IrrqewpvxvhSLHimCVzqeuULCbG0fQv7Dtk1yDbG3xv7Veog==}
    engines: {node: '>=12'}

  postgres-bytea@3.0.0:
    resolution: {integrity: sha512-CNd4jim9RFPkObHSjVHlVrxoVQXz7quwNFpz7RY1okNNme49+sVyiTvTRobiLV548Hx/hb1BG+iE7h9493WzFw==}
    engines: {node: '>= 6'}

  postgres-date@2.1.0:
    resolution: {integrity: sha512-K7Juri8gtgXVcDfZttFKVmhglp7epKb1K4pgrkLxehjqkrgPhfG6OO8LHLkfaqkbpjNRnra018XwAr1yQFWGcA==}
    engines: {node: '>=12'}

  postgres-interval@3.0.0:
    resolution: {integrity: sha512-BSNDnbyZCXSxgA+1f5UU2GmwhoI0aU5yMxRGO8CdFEcY2BQF9xm/7MqKnYoM1nJDk8nONNWDk9WeSmePFhQdlw==}
    engines: {node: '>=12'}

  postgres-range@1.1.4:
    resolution: {integrity: sha512-i/hbxIE9803Alj/6ytL7UHQxRvZkI9O4Sy+J3HGc4F4oo/2eQAjTSNJ0bfxyse3bH0nuVesCk+3IRLaMtG3H6w==}

  preact-render-to-string@5.2.3:
    resolution: {integrity: sha512-aPDxUn5o3GhWdtJtW0svRC2SS/l8D9MAgo2+AWml+BhDImb27ALf04Q2d+AHqUUOc6RdSXFIBVa2gxzgMKgtZA==}
    peerDependencies:
      preact: '>=10'

  preact@10.11.3:
    resolution: {integrity: sha512-eY93IVpod/zG3uMF22Unl8h9KkrcKIRs2EGar8hwLZZDU1lkjph303V9HZBwufh2s736U6VXuhD109LYqPoffg==}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prettier-linter-helpers@1.0.0:
    resolution: {integrity: sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==}
    engines: {node: '>=6.0.0'}

  prettier@3.3.3:
    resolution: {integrity: sha512-i2tDNA0O5IrMO757lfrdQZCc2jPNDVntV0m/+4whiDfWaTKfMNgR7Qz0NAeGz/nRqF4m5/6CLzbP4/liHt12Ew==}
    engines: {node: '>=14'}
    hasBin: true

  pretty-format@3.8.0:
    resolution: {integrity: sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@19.0.0-rc-f38c22b244-20240704:
    resolution: {integrity: sha512-g89q2pf3irdpKFUMgCQgtxgqo3TSV1k1J6Sc8God4FwfxuNmAOOthkijENe5XZe6VeV1tor9DPzpjdTD9EyvNw==}
    peerDependencies:
      react: 19.0.0-rc-f38c22b244-20240704

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react@19.0.0-rc-f38c22b244-20240704:
    resolution: {integrity: sha512-OP8O6Oc1rdR9IdIKJRKaL1PYd4eGkn6f88VqiygWyyG4P4RmPPix5pp7MatqSt9TnBOcVT+lBMGoVxRgUFeudQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  reflect.getprototypeof@1.0.6:
    resolution: {integrity: sha512-fmfw4XgoDke3kdI6h4xcUz1dG8uaiv5q9gcEwLS4Pnth2kxT+GZ7YehS1JTMGBQmtV7Y4GFGbs2re2NqhdozUg==}
    engines: {node: '>= 0.4'}

  regexp.prototype.flags@1.5.2:
    resolution: {integrity: sha512-NcDiDkTLuPR+++OCKB0nWafEmhg/Da8aUPLPMQbK+bxKKCm1/S5he+AqYa4PlMCVBalb4/yxIRub6qkEx5yJbw==}
    engines: {node: '>= 0.4'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve@1.22.8:
    resolution: {integrity: sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==}
    hasBin: true

  resolve@2.0.0-next.5:
    resolution: {integrity: sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==}
    hasBin: true

  reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.2:
    resolution: {integrity: sha512-vj6RsCsWBCf19jIeHEfkRMw8DPiBb+DMXklQ/1SGDHOMlHdPUkZXFQ2YdplS23zESTijAcurb1aSgJA3AgMu1Q==}
    engines: {node: '>=0.4'}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safe-regex-test@1.0.3:
    resolution: {integrity: sha512-CdASjNJPvRa7roO6Ra/gLYBTzYzzPyyBXxIMdGW3USQLyjWEls2RgW5UBTXaQVp+OrpeCK3bLem8smtmheoRuw==}
    engines: {node: '>= 0.4'}

  scheduler@0.25.0-rc-f38c22b244-20240704:
    resolution: {integrity: sha512-uAELK9fHhvg7kDQhk29+uO8FUMWUpkg9WpzkNXFP+BJy5HEtqnajde3CxuSgh202WH9TqoaiWT1mdA3DvUu6cQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.6.2:
    resolution: {integrity: sha512-FNAIBWCx9qcRhoHcgcJ0gvU7SN1lYU2ZXuSfl04bSC5OpvDHFyJCjdNHomPXxjQlCBU67YW64PzY7/VIEH7F2w==}
    engines: {node: '>=10'}
    hasBin: true

  set-blocking@2.0.0:
    resolution: {integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  sharp@0.33.4:
    resolution: {integrity: sha512-7i/dt5kGl7qR4gwPRD2biwD2/SvBn3O04J77XKFgL2OnZtQw+AG9wnuS/csmu80nPRHLYE9E41fyEiG8nhH6/Q==}
    engines: {libvips: '>=8.15.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel@1.0.6:
    resolution: {integrity: sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  source-map-js@1.2.0:
    resolution: {integrity: sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==}
    engines: {node: '>=0.10.0'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string.prototype.matchall@4.0.11:
    resolution: {integrity: sha512-NUdh0aDavY2og7IbBPenWqR9exH+E26Sv8e0/eTe1tltDGZL+GtBkDAnnyBtmekfK6/Dq3MkcGtzXFEd1LQrtg==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.9:
    resolution: {integrity: sha512-klHuCNxiMZ8MlsOihJhJEBJAiMVqU3Z2nEXWfWnIqjN0gEFS9J9+IxKozWWtQGcgoa1WUZzLjKPTr4ZHNFTFxw==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.8:
    resolution: {integrity: sha512-p73uL5VCHCO2BZZ6krwwQE3kCzM7NKmis8S//xEC6fQonchbum4eP6kR4DLEjQFO3Wnj3Fuo8NM0kOSjVdHjZQ==}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  synckit@0.9.1:
    resolution: {integrity: sha512-7gr8p9TQP6RAHusBOSLs46F4564ZrjV8xFmw5zCmgmhGUcw2hxsShhJ6CEiHQMgPDwAQ1fWHPM0ypc4RMAig4A==}
    engines: {node: ^14.18.0 || >=16.0.0}

  tailwindcss@3.4.4:
    resolution: {integrity: sha512-ZoyXOdJjISB7/BcLTR6SEsLgKtDStYyYZVLsUtWChO4Ps20CBad7lfJKVDiejocV4ME1hLmyY0WJE3hSDcmQ2A==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  tar@6.2.1:
    resolution: {integrity: sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==}
    engines: {node: '>=10'}

  text-table@0.2.0:
    resolution: {integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==}

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}

  ts-api-utils@1.3.0:
    resolution: {integrity: sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==}
    engines: {node: '>=16'}
    peerDependencies:
      typescript: '>=4.2.0'

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  tslib@2.6.3:
    resolution: {integrity: sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  typed-array-buffer@1.0.2:
    resolution: {integrity: sha512-gEymJYKZtKXzzBzM4jqa9w6Q1Jjm7x2d+sh19AdsD4wqnMPDYyvwpsIc2Q/835kHuo3BEQ7CjelGhfTsoBb2MQ==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.1:
    resolution: {integrity: sha512-3iMJ9q0ao7WE9tWcaYKIptkNBuOIcZCCT0d4MRvuuH88fEoEH62IuQe0OtraD3ebQEoTRk8XCBoknUNc1Y67pw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.2:
    resolution: {integrity: sha512-Ous0vodHa56FviZucS2E63zkgtgrACj7omjwd/8lTEMEPFFyjfixMZ1ZXenpgCFBBt4EC1J2XsyVS2gkG0eTFA==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.6:
    resolution: {integrity: sha512-/OxDN6OtAk5KBpGb28T+HZc2M+ADtvRxXrKKbUwtsLgdoxgX13hyy7ek6bFRl5+aBs2yZzB0c4CnQfAtVypW/g==}
    engines: {node: '>= 0.4'}

  typescript-eslint@8.0.1:
    resolution: {integrity: sha512-V3Y+MdfhawxEjE16dWpb7/IOgeXnLwAEEkS7v8oDqNcR1oYlqWhGH/iHqHdKVdpWme1VPZ0SoywXAkCqawj2eQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  typescript@5.5.2:
    resolution: {integrity: sha512-NcRtPEOsPFFWjobJEtfihkLCZCXZt/os3zf8nTxjVH3RvTSxjrCamJpbExGvYOF+tFHc3pA65qpdwPbzjohhew==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.0.2:
    resolution: {integrity: sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==}

  undici-types@5.26.5:
    resolution: {integrity: sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==}

  update-browserslist-db@1.0.16:
    resolution: {integrity: sha512-KVbTxlBYlckhF5wgfyZXTWnMn7MMZjMu9XG8bPlliUOP9ThaF4QnhP8qrjrH7DRzHfSk0oQv1wToW+iA5GajEQ==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-debounce@10.0.1:
    resolution: {integrity: sha512-0uUXjOfm44e6z4LZ/woZvkM8FwV1wiuoB6xnrrOmeAEjRDDzTLQNRFtYHvqUsJdrz1X37j0rVGIVp144GLHGKg==}
    engines: {node: '>= 16.0.0'}
    peerDependencies:
      react: '>=16.8.0'

  utf-8-validate@6.0.4:
    resolution: {integrity: sha512-xu9GQDeFp+eZ6LnCywXN/zBancWvOpUMzgjLPSjy4BRHSmTelvn2E0DG0o1sTiw5hkCKBHo8rwSKncfRfv2EEQ==}
    engines: {node: '>=6.14.2'}

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}

  whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}

  which-boxed-primitive@1.0.2:
    resolution: {integrity: sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==}

  which-builtin-type@1.1.4:
    resolution: {integrity: sha512-bppkmBSsHFmIMSl8BO9TbsyzsvGjVoppt8xUiGzwiu/bhDCGxnpOKCxgqj6GuyHE0mINMDecBFPlOm2hzY084w==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.15:
    resolution: {integrity: sha512-oV0jmFtUky6CXfkqehVvBP/LSWJ2sy4vWMioiENyJLePrBO/yKyV9OyJySfAKosh+RYkIl5zJCNZ8/4JncrpdA==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  wide-align@1.1.5:
    resolution: {integrity: sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==}

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  ws@8.18.0:
    resolution: {integrity: sha512-8VbfWfHLbbwu3+N6OKsOMpBdT4kXPDDB9cJk2bJ6mh9ucxdlnNvH1e+roYkKmN9Nxw2yjz7VzeO9oOz2zJ04Pw==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  yallist@4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}

  yaml@2.4.3:
    resolution: {integrity: sha512-sntgmxj8o7DE7g/Qi60cqpLBA3HG3STcDA0kO+WfB05jEKhZMbY7umNm2rBpQvsmZ16/lPXCJGW2672dgOUkrg==}
    engines: {node: '>= 14'}
    hasBin: true

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  zod@3.23.8:
    resolution: {integrity: sha512-XBx9AXhXktjUqnepgTiE5flcKIYWi/rme0Eaj+5Y0lftuGBq+jyRu/md4WnuxqgP1ubdpNCsYEYPxrzVHD8d6g==}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@auth/core@0.32.0':
    dependencies:
      '@panva/hkdf': 1.2.0
      '@types/cookie': 0.6.0
      cookie: 0.6.0
      jose: 5.4.1
      oauth4webapi: 2.11.1
      preact: 10.11.3
      preact-render-to-string: 5.2.3(preact@10.11.3)

  '@emnapi/runtime@1.2.0':
    dependencies:
      tslib: 2.6.3
    optional: true

  '@eslint-community/eslint-utils@4.4.0(eslint@9.8.0)':
    dependencies:
      eslint: 9.8.0
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.11.0': {}

  '@eslint/config-array@0.17.1':
    dependencies:
      '@eslint/object-schema': 2.1.4
      debug: 4.3.5
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@eslint/eslintrc@3.1.0':
    dependencies:
      ajv: 6.12.6
      debug: 4.3.5
      espree: 10.1.0
      globals: 14.0.0
      ignore: 5.3.1
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@9.8.0': {}

  '@eslint/object-schema@2.1.4': {}

  '@heroicons/react@2.1.4(react@19.0.0-rc-f38c22b244-20240704)':
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/retry@0.3.0': {}

  '@img/sharp-darwin-arm64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.0.2
    optional: true

  '@img/sharp-darwin-x64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.0.2
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.0.2':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.0.2':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.0.2':
    optional: true

  '@img/sharp-libvips-linux-arm@1.0.2':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.0.2':
    optional: true

  '@img/sharp-libvips-linux-x64@1.0.2':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.0.2':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.0.2':
    optional: true

  '@img/sharp-linux-arm64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.0.2
    optional: true

  '@img/sharp-linux-arm@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.0.2
    optional: true

  '@img/sharp-linux-s390x@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.0.2
    optional: true

  '@img/sharp-linux-x64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.0.2
    optional: true

  '@img/sharp-linuxmusl-arm64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.2
    optional: true

  '@img/sharp-linuxmusl-x64@0.33.4':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.0.2
    optional: true

  '@img/sharp-wasm32@0.33.4':
    dependencies:
      '@emnapi/runtime': 1.2.0
    optional: true

  '@img/sharp-win32-ia32@0.33.4':
    optional: true

  '@img/sharp-win32-x64@0.33.4':
    optional: true

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@jridgewell/gen-mapping@0.3.5':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.4.15
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/sourcemap-codec@1.4.15': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.4.15

  '@mapbox/node-pre-gyp@1.0.11':
    dependencies:
      detect-libc: 2.0.3
      https-proxy-agent: 5.0.1
      make-dir: 3.1.0
      node-fetch: 2.7.0
      nopt: 5.0.0
      npmlog: 5.0.1
      rimraf: 3.0.2
      semver: 7.6.2
      tar: 6.2.1
    transitivePeerDependencies:
      - encoding
      - supports-color

  '@neondatabase/serverless@0.9.4':
    dependencies:
      '@types/pg': 8.11.6

  '@next/env@15.0.0-canary.56': {}

  '@next/swc-darwin-arm64@15.0.0-canary.56':
    optional: true

  '@next/swc-darwin-x64@15.0.0-canary.56':
    optional: true

  '@next/swc-linux-arm64-gnu@15.0.0-canary.56':
    optional: true

  '@next/swc-linux-arm64-musl@15.0.0-canary.56':
    optional: true

  '@next/swc-linux-x64-gnu@15.0.0-canary.56':
    optional: true

  '@next/swc-linux-x64-musl@15.0.0-canary.56':
    optional: true

  '@next/swc-win32-arm64-msvc@15.0.0-canary.56':
    optional: true

  '@next/swc-win32-ia32-msvc@15.0.0-canary.56':
    optional: true

  '@next/swc-win32-x64-msvc@15.0.0-canary.56':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1

  '@panva/hkdf@1.2.0': {}

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@pkgr/core@0.1.1': {}

  '@swc/helpers@0.5.11':
    dependencies:
      tslib: 2.6.3

  '@tailwindcss/forms@0.5.7(tailwindcss@3.4.4)':
    dependencies:
      mini-svg-data-uri: 1.4.4
      tailwindcss: 3.4.4

  '@types/bcrypt@5.0.2':
    dependencies:
      '@types/node': 20.14.8

  '@types/cookie@0.6.0': {}

  '@types/node@20.14.8':
    dependencies:
      undici-types: 5.26.5

  '@types/pg@8.11.6':
    dependencies:
      '@types/node': 20.14.8
      pg-protocol: 1.6.1
      pg-types: 4.0.2

  '@types/prop-types@15.7.12': {}

  '@types/react-dom@18.3.0':
    dependencies:
      '@types/react': 18.3.3

  '@types/react@18.3.3':
    dependencies:
      '@types/prop-types': 15.7.12
      csstype: 3.1.3

  '@typescript-eslint/eslint-plugin@8.0.1(@typescript-eslint/parser@8.0.1(eslint@9.8.0)(typescript@5.5.2))(eslint@9.8.0)(typescript@5.5.2)':
    dependencies:
      '@eslint-community/regexpp': 4.11.0
      '@typescript-eslint/parser': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/scope-manager': 8.0.1
      '@typescript-eslint/type-utils': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/utils': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/visitor-keys': 8.0.1
      eslint: 9.8.0
      graphemer: 1.4.0
      ignore: 5.3.1
      natural-compare: 1.4.0
      ts-api-utils: 1.3.0(typescript@5.5.2)
    optionalDependencies:
      typescript: 5.5.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@8.0.1(eslint@9.8.0)(typescript@5.5.2)':
    dependencies:
      '@typescript-eslint/scope-manager': 8.0.1
      '@typescript-eslint/types': 8.0.1
      '@typescript-eslint/typescript-estree': 8.0.1(typescript@5.5.2)
      '@typescript-eslint/visitor-keys': 8.0.1
      debug: 4.3.5
      eslint: 9.8.0
    optionalDependencies:
      typescript: 5.5.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@8.0.1':
    dependencies:
      '@typescript-eslint/types': 8.0.1
      '@typescript-eslint/visitor-keys': 8.0.1

  '@typescript-eslint/type-utils@8.0.1(eslint@9.8.0)(typescript@5.5.2)':
    dependencies:
      '@typescript-eslint/typescript-estree': 8.0.1(typescript@5.5.2)
      '@typescript-eslint/utils': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      debug: 4.3.5
      ts-api-utils: 1.3.0(typescript@5.5.2)
    optionalDependencies:
      typescript: 5.5.2
    transitivePeerDependencies:
      - eslint
      - supports-color

  '@typescript-eslint/types@8.0.1': {}

  '@typescript-eslint/typescript-estree@8.0.1(typescript@5.5.2)':
    dependencies:
      '@typescript-eslint/types': 8.0.1
      '@typescript-eslint/visitor-keys': 8.0.1
      debug: 4.3.5
      globby: 11.1.0
      is-glob: 4.0.3
      minimatch: 9.0.4
      semver: 7.6.2
      ts-api-utils: 1.3.0(typescript@5.5.2)
    optionalDependencies:
      typescript: 5.5.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@8.0.1(eslint@9.8.0)(typescript@5.5.2)':
    dependencies:
      '@eslint-community/eslint-utils': 4.4.0(eslint@9.8.0)
      '@typescript-eslint/scope-manager': 8.0.1
      '@typescript-eslint/types': 8.0.1
      '@typescript-eslint/typescript-estree': 8.0.1(typescript@5.5.2)
      eslint: 9.8.0
    transitivePeerDependencies:
      - supports-color
      - typescript

  '@typescript-eslint/visitor-keys@8.0.1':
    dependencies:
      '@typescript-eslint/types': 8.0.1
      eslint-visitor-keys: 3.4.3

  '@vercel/postgres@0.9.0':
    dependencies:
      '@neondatabase/serverless': 0.9.4
      bufferutil: 4.0.8
      utf-8-validate: 6.0.4
      ws: 8.18.0(bufferutil@4.0.8)(utf-8-validate@6.0.4)

  abbrev@1.1.1: {}

  acorn-jsx@5.3.2(acorn@8.12.1):
    dependencies:
      acorn: 8.12.1

  acorn@8.12.1: {}

  agent-base@6.0.2:
    dependencies:
      debug: 4.3.5
    transitivePeerDependencies:
      - supports-color

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-regex@5.0.1: {}

  ansi-regex@6.0.1: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@6.2.1: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  aproba@2.0.0: {}

  are-we-there-yet@2.0.0:
    dependencies:
      delegates: 1.0.0
      readable-stream: 3.6.2

  arg@5.0.2: {}

  argparse@2.0.1: {}

  array-buffer-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      is-array-buffer: 3.0.4

  array-includes@3.1.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0
      get-intrinsic: 1.2.4
      is-string: 1.0.7

  array-union@2.1.0: {}

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      es-shim-unscopables: 1.0.2

  array.prototype.flat@1.3.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-shim-unscopables: 1.0.2

  array.prototype.flatmap@1.3.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-shim-unscopables: 1.0.2

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-shim-unscopables: 1.0.2

  arraybuffer.prototype.slice@1.0.3:
    dependencies:
      array-buffer-byte-length: 1.0.1
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      is-array-buffer: 3.0.4
      is-shared-array-buffer: 1.0.3

  autoprefixer@10.4.19(postcss@8.4.38):
    dependencies:
      browserslist: 4.23.0
      caniuse-lite: 1.0.30001632
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.0.1
      postcss: 8.4.38
      postcss-value-parser: 4.2.0

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.0.0

  balanced-match@1.0.2: {}

  bcrypt@5.1.1:
    dependencies:
      '@mapbox/node-pre-gyp': 1.0.11
      node-addon-api: 5.1.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  binary-extensions@2.3.0: {}

  brace-expansion@1.1.11:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.23.0:
    dependencies:
      caniuse-lite: 1.0.30001632
      electron-to-chromium: 1.4.789
      node-releases: 2.0.14
      update-browserslist-db: 1.0.16(browserslist@4.23.0)

  bufferutil@4.0.8:
    dependencies:
      node-gyp-build: 4.8.1

  busboy@1.6.0:
    dependencies:
      streamsearch: 1.1.0

  call-bind@1.0.7:
    dependencies:
      es-define-property: 1.0.0
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      set-function-length: 1.2.2

  callsites@3.1.0: {}

  camelcase-css@2.0.1: {}

  caniuse-lite@1.0.30001632: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  chownr@2.0.0: {}

  client-only@0.0.1: {}

  clsx@2.1.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  color-string@1.9.1:
    dependencies:
      color-name: 1.1.4
      simple-swizzle: 0.2.2
    optional: true

  color-support@1.1.3: {}

  color@4.2.3:
    dependencies:
      color-convert: 2.0.1
      color-string: 1.9.1
    optional: true

  commander@4.1.1: {}

  concat-map@0.0.1: {}

  console-control-strings@1.1.0: {}

  cookie@0.6.0: {}

  cross-spawn@7.0.3:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.1.3: {}

  data-view-buffer@1.0.1:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  data-view-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  data-view-byte-offset@1.0.0:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  debug@4.3.5:
    dependencies:
      ms: 2.1.2

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.0
      es-errors: 1.3.0
      gopd: 1.0.1

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  delegates@1.0.0: {}

  detect-libc@2.0.3: {}

  didyoumean@1.2.2: {}

  dir-glob@3.0.1:
    dependencies:
      path-type: 4.0.0

  dlv@1.1.3: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  eastasianwidth@0.2.0: {}

  electron-to-chromium@1.4.789: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  es-abstract@1.23.3:
    dependencies:
      array-buffer-byte-length: 1.0.1
      arraybuffer.prototype.slice: 1.0.3
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      data-view-buffer: 1.0.1
      data-view-byte-length: 1.0.1
      data-view-byte-offset: 1.0.0
      es-define-property: 1.0.0
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      es-set-tostringtag: 2.0.3
      es-to-primitive: 1.2.1
      function.prototype.name: 1.1.6
      get-intrinsic: 1.2.4
      get-symbol-description: 1.0.2
      globalthis: 1.0.4
      gopd: 1.0.1
      has-property-descriptors: 1.0.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      hasown: 2.0.2
      internal-slot: 1.0.7
      is-array-buffer: 3.0.4
      is-callable: 1.2.7
      is-data-view: 1.0.1
      is-negative-zero: 2.0.3
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.3
      is-string: 1.0.7
      is-typed-array: 1.1.13
      is-weakref: 1.0.2
      object-inspect: 1.13.2
      object-keys: 1.1.1
      object.assign: 4.1.5
      regexp.prototype.flags: 1.5.2
      safe-array-concat: 1.1.2
      safe-regex-test: 1.0.3
      string.prototype.trim: 1.2.9
      string.prototype.trimend: 1.0.8
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.2
      typed-array-byte-length: 1.0.1
      typed-array-byte-offset: 1.0.2
      typed-array-length: 1.0.6
      unbox-primitive: 1.0.2
      which-typed-array: 1.1.15

  es-define-property@1.0.0:
    dependencies:
      get-intrinsic: 1.2.4

  es-errors@1.3.0: {}

  es-iterator-helpers@1.0.19:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-set-tostringtag: 2.0.3
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      globalthis: 1.0.4
      has-property-descriptors: 1.0.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      internal-slot: 1.0.7
      iterator.prototype: 1.1.2
      safe-array-concat: 1.1.2

  es-object-atoms@1.0.0:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.0.3:
    dependencies:
      get-intrinsic: 1.2.4
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  es-shim-unscopables@1.0.2:
    dependencies:
      hasown: 2.0.2

  es-to-primitive@1.2.1:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.0.5
      is-symbol: 1.0.4

  escalade@3.1.2: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-prettier@9.1.0(eslint@9.8.0):
    dependencies:
      eslint: 9.8.0

  eslint-plugin-prettier@5.2.1(eslint-config-prettier@9.1.0(eslint@9.8.0))(eslint@9.8.0)(prettier@3.3.3):
    dependencies:
      eslint: 9.8.0
      prettier: 3.3.3
      prettier-linter-helpers: 1.0.0
      synckit: 0.9.1
    optionalDependencies:
      eslint-config-prettier: 9.1.0(eslint@9.8.0)

  eslint-plugin-react@7.35.0(eslint@9.8.0):
    dependencies:
      array-includes: 3.1.8
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.2
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.0.19
      eslint: 9.8.0
      estraverse: 5.3.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.2
      object.entries: 1.1.8
      object.fromentries: 2.0.8
      object.values: 1.2.0
      prop-types: 15.8.1
      resolve: 2.0.0-next.5
      semver: 6.3.1
      string.prototype.matchall: 4.0.11
      string.prototype.repeat: 1.0.0

  eslint-scope@8.0.2:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint-visitor-keys@4.0.0: {}

  eslint@9.8.0:
    dependencies:
      '@eslint-community/eslint-utils': 4.4.0(eslint@9.8.0)
      '@eslint-community/regexpp': 4.11.0
      '@eslint/config-array': 0.17.1
      '@eslint/eslintrc': 3.1.0
      '@eslint/js': 9.8.0
      '@humanwhocodes/module-importer': 1.0.1
      '@humanwhocodes/retry': 0.3.0
      '@nodelib/fs.walk': 1.2.8
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.5
      escape-string-regexp: 4.0.0
      eslint-scope: 8.0.2
      eslint-visitor-keys: 4.0.0
      espree: 10.1.0
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 8.0.0
      find-up: 5.0.0
      glob-parent: 6.0.2
      ignore: 5.3.1
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      is-path-inside: 3.0.3
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
      strip-ansi: 6.0.1
      text-table: 0.2.0
    transitivePeerDependencies:
      - supports-color

  espree@10.1.0:
    dependencies:
      acorn: 8.12.1
      acorn-jsx: 5.3.2(acorn@8.12.1)
      eslint-visitor-keys: 4.0.0

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  fast-deep-equal@3.1.3: {}

  fast-diff@1.3.0: {}

  fast-glob@3.3.2:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.7

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.17.1:
    dependencies:
      reusify: 1.0.4

  file-entry-cache@8.0.0:
    dependencies:
      flat-cache: 4.0.1

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@4.0.1:
    dependencies:
      flatted: 3.3.1
      keyv: 4.5.4

  flatted@3.3.1: {}

  for-each@0.3.3:
    dependencies:
      is-callable: 1.2.7

  foreground-child@3.1.1:
    dependencies:
      cross-spawn: 7.0.3
      signal-exit: 4.1.0

  fraction.js@4.3.7: {}

  fs-minipass@2.1.0:
    dependencies:
      minipass: 3.3.6

  fs.realpath@1.0.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  function.prototype.name@1.1.6:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      functions-have-names: 1.2.3

  functions-have-names@1.2.3: {}

  gauge@3.0.2:
    dependencies:
      aproba: 2.0.0
      color-support: 1.1.3
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wide-align: 1.1.5

  get-intrinsic@1.2.4:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      hasown: 2.0.2

  get-symbol-description@1.0.2:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      get-intrinsic: 1.2.4

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@10.4.1:
    dependencies:
      foreground-child: 3.1.1
      jackspeak: 3.2.3
      minimatch: 9.0.4
      minipass: 7.1.2
      path-scurry: 1.11.1

  glob@7.2.3:
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  globals@14.0.0: {}

  globals@15.9.0: {}

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.0.1

  globby@11.1.0:
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.3.2
      ignore: 5.3.1
      merge2: 1.4.1
      slash: 3.0.0

  gopd@1.0.1:
    dependencies:
      get-intrinsic: 1.2.4

  graceful-fs@4.2.11: {}

  graphemer@1.4.0: {}

  has-bigints@1.0.2: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.0

  has-proto@1.0.3: {}

  has-symbols@1.0.3: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.0.3

  has-unicode@2.0.1: {}

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  https-proxy-agent@5.0.1:
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.5
    transitivePeerDependencies:
      - supports-color

  ignore@5.3.1: {}

  import-fresh@3.3.0:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  inflight@1.0.6:
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  inherits@2.0.4: {}

  internal-slot@1.0.7:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.2
      side-channel: 1.0.6

  is-array-buffer@3.0.4:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4

  is-arrayish@0.3.2:
    optional: true

  is-async-function@2.0.0:
    dependencies:
      has-tostringtag: 1.0.2

  is-bigint@1.0.4:
    dependencies:
      has-bigints: 1.0.2

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-boolean-object@1.1.2:
    dependencies:
      call-bind: 1.0.7
      has-tostringtag: 1.0.2

  is-callable@1.2.7: {}

  is-core-module@2.13.1:
    dependencies:
      hasown: 2.0.2

  is-data-view@1.0.1:
    dependencies:
      is-typed-array: 1.1.13

  is-date-object@1.0.5:
    dependencies:
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.0.2:
    dependencies:
      call-bind: 1.0.7

  is-fullwidth-code-point@3.0.0: {}

  is-generator-function@1.0.10:
    dependencies:
      has-tostringtag: 1.0.2

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.0.7:
    dependencies:
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-path-inside@3.0.3: {}

  is-regex@1.1.4:
    dependencies:
      call-bind: 1.0.7
      has-tostringtag: 1.0.2

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.3:
    dependencies:
      call-bind: 1.0.7

  is-string@1.0.7:
    dependencies:
      has-tostringtag: 1.0.2

  is-symbol@1.0.4:
    dependencies:
      has-symbols: 1.0.3

  is-typed-array@1.1.13:
    dependencies:
      which-typed-array: 1.1.15

  is-weakmap@2.0.2: {}

  is-weakref@1.0.2:
    dependencies:
      call-bind: 1.0.7

  is-weakset@2.0.3:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  iterator.prototype@1.1.2:
    dependencies:
      define-properties: 1.2.1
      get-intrinsic: 1.2.4
      has-symbols: 1.0.3
      reflect.getprototypeof: 1.0.6
      set-function-name: 2.0.2

  jackspeak@3.2.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jiti@1.21.0: {}

  jose@5.4.1: {}

  js-tokens@4.0.0: {}

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.8
      array.prototype.flat: 1.3.2
      object.assign: 4.1.5
      object.values: 1.2.0

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lilconfig@2.1.0: {}

  lilconfig@3.1.1: {}

  lines-and-columns@1.2.4: {}

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@10.2.2: {}

  make-dir@3.1.0:
    dependencies:
      semver: 6.3.1

  merge2@1.4.1: {}

  micromatch@4.0.7:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  mini-svg-data-uri@1.4.4: {}

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.11

  minimatch@9.0.4:
    dependencies:
      brace-expansion: 2.0.1

  minipass@3.3.6:
    dependencies:
      yallist: 4.0.0

  minipass@5.0.0: {}

  minipass@7.1.2: {}

  minizlib@2.1.2:
    dependencies:
      minipass: 3.3.6
      yallist: 4.0.0

  mkdirp@1.0.4: {}

  ms@2.1.2: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nanoid@3.3.7: {}

  natural-compare@1.4.0: {}

  next-auth@5.0.0-beta.19(next@15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704):
    dependencies:
      '@auth/core': 0.32.0
      next: 15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704)
      react: 19.0.0-rc-f38c22b244-20240704

  next@15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704))(react@19.0.0-rc-f38c22b244-20240704):
    dependencies:
      '@next/env': 15.0.0-canary.56
      '@swc/helpers': 0.5.11
      busboy: 1.6.0
      caniuse-lite: 1.0.30001632
      graceful-fs: 4.2.11
      postcss: 8.4.31
      react: 19.0.0-rc-f38c22b244-20240704
      react-dom: 19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704)
      styled-jsx: 5.1.6(react@19.0.0-rc-f38c22b244-20240704)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.0.0-canary.56
      '@next/swc-darwin-x64': 15.0.0-canary.56
      '@next/swc-linux-arm64-gnu': 15.0.0-canary.56
      '@next/swc-linux-arm64-musl': 15.0.0-canary.56
      '@next/swc-linux-x64-gnu': 15.0.0-canary.56
      '@next/swc-linux-x64-musl': 15.0.0-canary.56
      '@next/swc-win32-arm64-msvc': 15.0.0-canary.56
      '@next/swc-win32-ia32-msvc': 15.0.0-canary.56
      '@next/swc-win32-x64-msvc': 15.0.0-canary.56
      sharp: 0.33.4
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-addon-api@5.1.0: {}

  node-fetch@2.7.0:
    dependencies:
      whatwg-url: 5.0.0

  node-gyp-build@4.8.1: {}

  node-releases@2.0.14: {}

  nopt@5.0.0:
    dependencies:
      abbrev: 1.1.1

  normalize-path@3.0.0: {}

  normalize-range@0.1.2: {}

  npmlog@5.0.1:
    dependencies:
      are-we-there-yet: 2.0.0
      console-control-strings: 1.1.0
      gauge: 3.0.2
      set-blocking: 2.0.0

  oauth4webapi@2.11.1: {}

  object-assign@4.1.1: {}

  object-hash@3.0.0: {}

  object-inspect@1.13.2: {}

  object-keys@1.1.1: {}

  object.assign@4.1.5:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      has-symbols: 1.0.3
      object-keys: 1.1.1

  object.entries@1.1.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0

  object.values@1.2.0:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  obuf@1.1.2: {}

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-is-absolute@1.0.1: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.2.2
      minipass: 7.1.2

  path-type@4.0.0: {}

  pg-int8@1.0.1: {}

  pg-numeric@1.0.2: {}

  pg-protocol@1.6.1: {}

  pg-types@4.0.2:
    dependencies:
      pg-int8: 1.0.1
      pg-numeric: 1.0.2
      postgres-array: 3.0.2
      postgres-bytea: 3.0.0
      postgres-date: 2.1.0
      postgres-interval: 3.0.0
      postgres-range: 1.1.4

  picocolors@1.0.1: {}

  picomatch@2.3.1: {}

  pify@2.3.0: {}

  pirates@4.0.6: {}

  possible-typed-array-names@1.0.0: {}

  postcss-import@15.1.0(postcss@8.4.38):
    dependencies:
      postcss: 8.4.38
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.8

  postcss-js@4.0.1(postcss@8.4.38):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.4.38

  postcss-load-config@4.0.2(postcss@8.4.38):
    dependencies:
      lilconfig: 3.1.1
      yaml: 2.4.3
    optionalDependencies:
      postcss: 8.4.38

  postcss-nested@6.0.1(postcss@8.4.38):
    dependencies:
      postcss: 8.4.38
      postcss-selector-parser: 6.1.0

  postcss-selector-parser@6.1.0:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0

  postcss@8.4.38:
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0

  postgres-array@3.0.2: {}

  postgres-bytea@3.0.0:
    dependencies:
      obuf: 1.1.2

  postgres-date@2.1.0: {}

  postgres-interval@3.0.0: {}

  postgres-range@1.1.4: {}

  preact-render-to-string@5.2.3(preact@10.11.3):
    dependencies:
      preact: 10.11.3
      pretty-format: 3.8.0

  preact@10.11.3: {}

  prelude-ls@1.2.1: {}

  prettier-linter-helpers@1.0.0:
    dependencies:
      fast-diff: 1.3.0

  prettier@3.3.3: {}

  pretty-format@3.8.0: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704):
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704
      scheduler: 0.25.0-rc-f38c22b244-20240704

  react-is@16.13.1: {}

  react@19.0.0-rc-f38c22b244-20240704: {}

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readable-stream@3.6.2:
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  reflect.getprototypeof@1.0.6:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      globalthis: 1.0.4
      which-builtin-type: 1.1.4

  regexp.prototype.flags@1.5.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-errors: 1.3.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve@1.22.8:
    dependencies:
      is-core-module: 2.13.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  resolve@2.0.0-next.5:
    dependencies:
      is-core-module: 2.13.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.0.4: {}

  rimraf@3.0.2:
    dependencies:
      glob: 7.2.3

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.2:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4
      has-symbols: 1.0.3
      isarray: 2.0.5

  safe-buffer@5.2.1: {}

  safe-regex-test@1.0.3:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-regex: 1.1.4

  scheduler@0.25.0-rc-f38c22b244-20240704: {}

  semver@6.3.1: {}

  semver@7.6.2: {}

  set-blocking@2.0.0: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      gopd: 1.0.1
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  sharp@0.33.4:
    dependencies:
      color: 4.2.3
      detect-libc: 2.0.3
      semver: 7.6.2
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.33.4
      '@img/sharp-darwin-x64': 0.33.4
      '@img/sharp-libvips-darwin-arm64': 1.0.2
      '@img/sharp-libvips-darwin-x64': 1.0.2
      '@img/sharp-libvips-linux-arm': 1.0.2
      '@img/sharp-libvips-linux-arm64': 1.0.2
      '@img/sharp-libvips-linux-s390x': 1.0.2
      '@img/sharp-libvips-linux-x64': 1.0.2
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.2
      '@img/sharp-libvips-linuxmusl-x64': 1.0.2
      '@img/sharp-linux-arm': 0.33.4
      '@img/sharp-linux-arm64': 0.33.4
      '@img/sharp-linux-s390x': 0.33.4
      '@img/sharp-linux-x64': 0.33.4
      '@img/sharp-linuxmusl-arm64': 0.33.4
      '@img/sharp-linuxmusl-x64': 0.33.4
      '@img/sharp-wasm32': 0.33.4
      '@img/sharp-win32-ia32': 0.33.4
      '@img/sharp-win32-x64': 0.33.4
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel@1.0.6:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      object-inspect: 1.13.2

  signal-exit@3.0.7: {}

  signal-exit@4.1.0: {}

  simple-swizzle@0.2.2:
    dependencies:
      is-arrayish: 0.3.2
    optional: true

  slash@3.0.0: {}

  source-map-js@1.2.0: {}

  streamsearch@1.1.0: {}

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  string.prototype.matchall@4.0.11:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      get-intrinsic: 1.2.4
      gopd: 1.0.1
      has-symbols: 1.0.3
      internal-slot: 1.0.7
      regexp.prototype.flags: 1.5.2
      set-function-name: 2.0.2
      side-channel: 1.0.6

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.23.3

  string.prototype.trim@1.2.9:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0

  string.prototype.trimend@1.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  string_decoder@1.3.0:
    dependencies:
      safe-buffer: 5.2.1

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.0.1

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.6(react@19.0.0-rc-f38c22b244-20240704):
    dependencies:
      client-only: 0.0.1
      react: 19.0.0-rc-f38c22b244-20240704

  sucrase@3.35.0:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.5
      commander: 4.1.1
      glob: 10.4.1
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.6
      ts-interface-checker: 0.1.13

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  synckit@0.9.1:
    dependencies:
      '@pkgr/core': 0.1.1
      tslib: 2.6.3

  tailwindcss@3.4.4:
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.2
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.0
      lilconfig: 2.1.0
      micromatch: 4.0.7
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.0.1
      postcss: 8.4.38
      postcss-import: 15.1.0(postcss@8.4.38)
      postcss-js: 4.0.1(postcss@8.4.38)
      postcss-load-config: 4.0.2(postcss@8.4.38)
      postcss-nested: 6.0.1(postcss@8.4.38)
      postcss-selector-parser: 6.1.0
      resolve: 1.22.8
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node

  tar@6.2.1:
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 5.0.0
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0

  text-table@0.2.0: {}

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  tr46@0.0.3: {}

  ts-api-utils@1.3.0(typescript@5.5.2):
    dependencies:
      typescript: 5.5.2

  ts-interface-checker@0.1.13: {}

  tslib@2.6.3: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.2:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-typed-array: 1.1.13

  typed-array-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13

  typed-array-byte-offset@1.0.2:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13

  typed-array-length@1.0.6:
    dependencies:
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13
      possible-typed-array-names: 1.0.0

  typescript-eslint@8.0.1(eslint@9.8.0)(typescript@5.5.2):
    dependencies:
      '@typescript-eslint/eslint-plugin': 8.0.1(@typescript-eslint/parser@8.0.1(eslint@9.8.0)(typescript@5.5.2))(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/parser': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
      '@typescript-eslint/utils': 8.0.1(eslint@9.8.0)(typescript@5.5.2)
    optionalDependencies:
      typescript: 5.5.2
    transitivePeerDependencies:
      - eslint
      - supports-color

  typescript@5.5.2: {}

  unbox-primitive@1.0.2:
    dependencies:
      call-bind: 1.0.7
      has-bigints: 1.0.2
      has-symbols: 1.0.3
      which-boxed-primitive: 1.0.2

  undici-types@5.26.5: {}

  update-browserslist-db@1.0.16(browserslist@4.23.0):
    dependencies:
      browserslist: 4.23.0
      escalade: 3.1.2
      picocolors: 1.0.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-debounce@10.0.1(react@19.0.0-rc-f38c22b244-20240704):
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704

  utf-8-validate@6.0.4:
    dependencies:
      node-gyp-build: 4.8.1

  util-deprecate@1.0.2: {}

  webidl-conversions@3.0.1: {}

  whatwg-url@5.0.0:
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  which-boxed-primitive@1.0.2:
    dependencies:
      is-bigint: 1.0.4
      is-boolean-object: 1.1.2
      is-number-object: 1.0.7
      is-string: 1.0.7
      is-symbol: 1.0.4

  which-builtin-type@1.1.4:
    dependencies:
      function.prototype.name: 1.1.6
      has-tostringtag: 1.0.2
      is-async-function: 2.0.0
      is-date-object: 1.0.5
      is-finalizationregistry: 1.0.2
      is-generator-function: 1.0.10
      is-regex: 1.1.4
      is-weakref: 1.0.2
      isarray: 2.0.5
      which-boxed-primitive: 1.0.2
      which-collection: 1.0.2
      which-typed-array: 1.1.15

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.3

  which-typed-array@1.1.15:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  wide-align@1.1.5:
    dependencies:
      string-width: 4.2.3

  word-wrap@1.2.5: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  wrappy@1.0.2: {}

  ws@8.18.0(bufferutil@4.0.8)(utf-8-validate@6.0.4):
    optionalDependencies:
      bufferutil: 4.0.8
      utf-8-validate: 6.0.4

  yallist@4.0.0: {}

  yaml@2.4.3: {}

  yocto-queue@0.1.0: {}

  zod@3.23.8: {}
