<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InstallApiCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'install:api';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install and configure API for the project';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting API installation...');



        $this->info('API installation completed successfully!');
        return 0;
    }
}
