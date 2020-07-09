<script type="ts">
  import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
  import { metatags } from '@sveltech/routify'
  let appName: string = 'My Routify app'
  metatags.title = appName
  metatags.description = 'Description coming soon...'
</script>

<RoutifyIntro />
