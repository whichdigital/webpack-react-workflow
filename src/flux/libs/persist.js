import alt from './alt'
import makeFinalStore from 'alt/utils/makeFinalStore'

export default function( PersistentBrowserStore, storeName = 'app' ) {
  let finalStore = makeFinalStore( alt )

  alt.bootstrap( PersistentBrowserStore.get( storeName ) )

  finalStore.listen( () => {
    if ( PersistentBrowserStore.get( 'debug' ) ) {
      return
    }
    PersistentBrowserStore.set( storeName, alt.takeSnapshot() )
  })
}
