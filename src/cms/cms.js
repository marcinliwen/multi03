import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import { pl } from 'netlify-cms-locales';

CMS.registerLocale('pl', pl);
CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index_pl', IndexPagePreview)
CMS.registerPreviewTemplate('index_de', IndexPagePreview)
CMS.registerPreviewTemplate('about_de', AboutPagePreview)
CMS.registerPreviewTemplate('about_pl', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('contactpl', ContactPagePreview)
CMS.registerPreviewTemplate('contactde', ContactPagePreview)
