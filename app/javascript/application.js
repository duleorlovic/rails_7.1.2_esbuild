// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as mdb from "../../vendor/mdb5-free-standard/js/mdb.umd.min.js"
window.mdb = mdb;
