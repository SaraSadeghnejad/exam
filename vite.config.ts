import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

{
  plugins: [
    // ...
    chunkSplitPlugin({
      strategy: 'unbundle',
      customSplitting: {
        // All files in `src/container` will be merged together in `container` chunk
        'container': [/src\/container/]
      }
    })
  ]
}