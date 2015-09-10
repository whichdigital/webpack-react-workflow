export default class {
  static get( key ) {
    try {
      return JSON.parse( localStorage.getItem( key ) )
    } catch( error ) {
      return null
    }
  }

  static set( key, value ) {
    localStorage.setItem( key, JSON.stringify( value ) )
  }
}
