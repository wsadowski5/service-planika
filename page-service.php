<?php
// Template name: Service

use KrFrame\KrFrame;

global $wp_query;

$template = new KrFrame;

$template->renderView('page-service.twig');
