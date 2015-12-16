name := """de.htwg.wt.sudoku2"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

libraryDependencies += "org.apache.logging.log4j" % "log4j-core" % "2.4.1"

libraryDependencies += "org.apache.logging.log4j" % "log4j-api" % "2.4.1"

libraryDependencies += "com.fasterxml.jackson.core" % "jackson-core" % "2.6.3"

libraryDependencies += "com.fasterxml.jackson.core" % "jackson-databind" % "2.6.3"

libraryDependencies += "com.typesafe.play" %% "play-json" % "2.4.1"

libraryDependencies += "org.webjars" % "bootstrap" % "3.3.5"

libraryDependencies += "org.webjars" %% "webjars-play" % "2.4.0"

libraryDependencies += "com.feth" %% "play-authenticate" % "0.7.1"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := true



fork in run := true