source "https://rubygems.org"

# Jekyll – statischer Website-Generator
gem "jekyll", "~> 4.3"

# Theme
gem "jekyll-theme-basically-basic"

# Sass-Converter auf 2.x pinnen: 3.x (Dart Sass) verträgt sich nicht mit den
# @import-/Susy-/Breakpoint-Partials des Themes ("Can't find stylesheet to import").
gem "jekyll-sass-converter", "~> 2.0"

# Seit Ruby 3.4 sind diese früheren Standard-Bibliotheken keine Default-Gems
# mehr und müssen für Jekyll/Liquid explizit angegeben werden.
gem "bigdecimal"
gem "csv"
gem "base64"
gem "logger"

# Plugins (von Minimal Mistakes benötigt bzw. genutzt)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
end

# Windows- und JRuby-Kompatibilität
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
